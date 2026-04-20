const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const path = require('path');

// Mock Google Apps Script Globals
global.SpreadsheetApp = {
  getUi: () => ({
    createMenu: () => ({
      addItem: () => ({
        addToUi: sinon.stub()
      })
    })
  }),
  getActiveSheet: sinon.stub(),
  getActiveSpreadsheet: sinon.stub(),
  getActive: sinon.stub()
};

global.ContentService = {
  createTextOutput: sinon.stub().returns({
    setMimeType: sinon.stub()
  }),
  MimeType: {
    JSON: 'application/json'
  }
};

// Load the Code.js file content into the global scope
const codePath = path.resolve(__dirname, '../Code.js');
const code = fs.readFileSync(codePath, 'utf8');
eval(code);

describe('Code.js Tests', () => {
  afterEach(() => {
    sinon.restore();
    // Reset stubs
    global.SpreadsheetApp.getActiveSheet = sinon.stub();
    global.SpreadsheetApp.getActiveSpreadsheet = sinon.stub();
    global.SpreadsheetApp.getActive = sinon.stub();
    global.ContentService.createTextOutput = sinon.stub().returns({
      setMimeType: sinon.stub()
    });
  });

  describe('onOpen()', () => {
    it('should create the admin menu', () => {
      const mockMenu = {
        addItem: sinon.stub().returnsThis(),
        addToUi: sinon.stub()
      };
      const mockUi = {
        createMenu: sinon.stub().returns(mockMenu)
      };
      const getUiStub = sinon.stub(global.SpreadsheetApp, 'getUi').returns(mockUi);

      onOpen();

      expect(getUiStub.calledOnce).to.be.true;
      expect(mockUi.createMenu.calledWith('⚙️ Admin Tools')).to.be.true;
      expect(mockMenu.addItem.calledWith('Generate Product ID', 'generarIdFilaActual')).to.be.true;
      expect(mockMenu.addToUi.calledOnce).to.be.true;
      getUiStub.restore();
    });
  });

  describe('generateId()', () => {
    it('should generate an ID of the specified length', () => {
      const id = generateId(10);
      expect(id).to.have.lengthOf(10);
    });

    it('should generate an ID of default length 8', () => {
      const id = generateId();
      expect(id).to.have.lengthOf(8);
    });

    it('should generate only alphanumeric characters', () => {
      const id = generateId(100);
      expect(id).to.match(/^[a-zA-Z0-9]+$/);
    });
  });

  describe('getProductById()', () => {
    let mockSheet, mockSpreadsheet;

    beforeEach(() => {
      mockSheet = {
        getDataRange: sinon.stub().returns({
          getValues: sinon.stub().returns([
            ['id', 'nombre', 'precio', 'descripcion', 'activo'],
            ['P001', 'Producto 1', 100, 'Desc 1', '1'],
            ['P002', 'Producto 2', 200, 'Desc 2', '0'],
            ['P003', 'Producto 3', 300, 'Desc 3', '1']
          ])
        })
      };
      mockSpreadsheet = {
        getSheetByName: sinon.stub().withArgs('Productos').returns(mockSheet)
      };
      global.SpreadsheetApp.getActiveSpreadsheet.returns(mockSpreadsheet);
    });

    it('should return the correct product if it exists and is active', () => {
      const product = getProductById('P001');
      expect(product).to.not.be.null;
      expect(product.nombre).to.equal('Producto 1');
      expect(product.activo).to.equal('1');
    });

    it('should return null if the product is not active', () => {
      const product = getProductById('P002');
      expect(product).to.be.null;
    });

    it('should return null if the product does not exist', () => {
      const product = getProductById('P999');
      expect(product).to.be.null;
    });
  });

  describe('doGet()', () => {
    let mockSheet, mockSpreadsheet;

    beforeEach(() => {
        mockSheet = {
          getDataRange: sinon.stub().returns({
            getValues: sinon.stub().returns([
              ['id', 'nombre', 'precio', 'descripcion', 'activo'],
              ['P001', 'Producto 1', 100, 'Desc 1', '1']
            ])
          })
        };
        mockSpreadsheet = {
          getSheetByName: sinon.stub().withArgs('Productos').returns(mockSheet)
        };
        global.SpreadsheetApp.getActiveSpreadsheet.returns(mockSpreadsheet);
    });

    it('should return error if product ID is missing', () => {
      const e = { parameter: {} };
      doGet(e);
      expect(global.ContentService.createTextOutput.calledOnce).to.be.true;
      const responseBody = JSON.parse(global.ContentService.createTextOutput.firstCall.args[0]);
      expect(responseBody.error).to.equal('Missing product id');
    });

    it('should return product if found', () => {
      const e = { parameter: { p: 'P001' } };
      doGet(e);
      expect(global.ContentService.createTextOutput.calledOnce).to.be.true;
      const responseBody = JSON.parse(global.ContentService.createTextOutput.firstCall.args[0]);
      expect(responseBody.id).to.equal('P001');
      expect(responseBody.nombre).to.equal('Producto 1');
    });

    it('should return error if product not found', () => {
      const e = { parameter: { p: 'P999' } };
      doGet(e);
      expect(global.ContentService.createTextOutput.calledOnce).to.be.true;
      const responseBody = JSON.parse(global.ContentService.createTextOutput.firstCall.args[0]);
      expect(responseBody.error).to.equal('Product not found');
    });
  });

  describe('generarIdFilaActual()', () => {
    let mockSheet, mockRange, mockToast;

    beforeEach(() => {
      mockRange = {
        getRow: sinon.stub(),
        getValue: sinon.stub(),
        setValue: sinon.stub()
      };
      mockSheet = {
        getName: sinon.stub(),
        getActiveRange: sinon.stub().returns(mockRange),
        getRange: sinon.stub().returns(mockRange)
      };
      mockToast = sinon.stub();
      global.SpreadsheetApp.getActiveSheet.returns(mockSheet);
      global.SpreadsheetApp.getActive.returns({ toast: mockToast });
    });

    it('should exit if sheet is not "Productos"', () => {
      mockSheet.getName.returns('OtherSheet');
      generarIdFilaActual();
      expect(mockRange.setValue.called).to.be.false;
    });

    it('should exit if row is 1 (header)', () => {
      mockSheet.getName.returns('Productos');
      mockRange.getRow.returns(1);
      generarIdFilaActual();
      expect(mockRange.setValue.called).to.be.false;
    });

    it('should toast if cell already has an ID', () => {
      mockSheet.getName.returns('Productos');
      mockRange.getRow.returns(2);
      mockRange.getValue.returns('EXISTING_ID');
      generarIdFilaActual();
      expect(mockToast.calledWith('Esta fila ya tiene ID')).to.be.true;
      expect(mockRange.setValue.called).to.be.false;
    });

    it('should generate and set ID if cell is empty', () => {
      mockSheet.getName.returns('Productos');
      mockRange.getRow.returns(2);
      mockRange.getValue.returns('');
      generarIdFilaActual();
      expect(mockRange.setValue.calledOnce).to.be.true;
      expect(mockToast.calledWith('ID generado')).to.be.true;
    });
  });
});

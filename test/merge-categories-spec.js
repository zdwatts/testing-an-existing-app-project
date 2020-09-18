const { expect } = require('chai');
const { mergeCategories : merge } = require('../merge-categories');

describe("mergeCategories()", () => {
  context("Using <li> tags", () => {
    const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;

    it("should return no <li>s for no categories", () => {
      //Arrange 
      let categories = []; 
      //Act 
      let mergeCategories = merge(template, categories, 'li');
      //Assert
      expect(mergeCategories).to.contain('<div>');
      expect(mergeCategories).to.contain('</div>');
      expect(mergeCategories).to.contain('<ul>');
      expect(mergeCategories).to.contain('</ul>');
      expect(mergeCategories).to.not.contain('<li>');
      expect(mergeCategories).to.not.contain('</li>'); 
      //expect(mergeCategories).to.not.contain('<!-- Content here -->');
    });

    it("should return a single <li> for one category", () => {
      expect.fail('please write this test');
    });

    it("should return an <li> for each category", () => {
      expect.fail('please write this test');
    });
  });

  context("using <option> tags", () => {
    const template = `
      <div>
        <select>
          <!-- Content here -->
        </select>
      </div>
    `;

    it("should return no <option>s for no categories", () => {
      expect.fail('please write this test');
    });

    it("should return a single <option> for one category", () => {
      expect.fail('please write this test');
    });

    it("should return an <option> for each category", () => {
      expect.fail('please write this test');
    });
  });
});

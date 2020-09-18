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
      expect(mergeCategories).to.not.contain('<!-- Content here -->');
    });

    it("should return a single <li> for one category", () => {
      //Arrange
      let categories = ["dog"]
      //Act
      let mergeCategories = merge(template, categories, "li");
      //Assert
      expect(mergeCategories).to.include("<div>");
      expect(mergeCategories).to.contain('</div>');
      expect(mergeCategories).to.contain('<ul>');
      expect(mergeCategories).to.contain('</ul>');
      expect(mergeCategories).to.contain("<li>dog</li>");
      expect(mergeCategories).to.not.contain('<!-- Content here -->');
    });

    it("should return an <li> for each category", () => {
      //Arrange
      let categories = ["cat", "dog", "mouse"];
      //Act
      let mergeCategories = merge(template, categories, "li");
      //Assert
      expect(mergeCategories).to.contain('<div>');
      expect(mergeCategories).to.contain('</div>');
      expect(mergeCategories).to.contain('<ul>');
      expect(mergeCategories).to.contain('</ul>');
      expect(mergeCategories).to.contain("<li>dog</li>");
      expect(mergeCategories).to.contain("<li>cat</li>");
      expect(mergeCategories).to.contain("<li>mouse</li>");
      expect(mergeCategories).to.not.contain('<!-- Content here -->');
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
      //Arrange
      const categories = [];
      //Act
      const mergeCategories = merge(template, categories, "option");
      //Assert
      expect(mergeCategories).to.contain("<div>");
      expect(mergeCategories).to.contain("</div>");
      expect(mergeCategories).to.contain("<select>");
      expect(mergeCategories).to.contain("</select>");
      expect(mergeCategories).to.not.contain("<option>");
      expect(mergeCategories).to.not.contain("</option>");
      expect(mergeCategories).to.not.contain('<!-- Content here -->');
    });

    it("should return a single <option> for one category", () => {
      //Arrange
      const categories = ["dog"];
      //Act
      const mergeCategories = merge(template, categories, "option");
      //Assert
      expect(mergeCategories).to.contain("<div>");
      expect(mergeCategories).to.contain("</div>");
      expect(mergeCategories).to.contain("<select>");
      expect(mergeCategories).to.contain("</select>");
      expect(mergeCategories).to.contain("<option>");
      expect(mergeCategories).to.contain("</option>");
      expect(mergeCategories).to.not.contain('<!-- Content here -->');
    });

    it("should return an <option> for each category", () => {
      //Arrange
      const categories = ["dog", "cat"];
      //Act
      const mergeCategories = merge(template, categories, "option");
      //Assert
      expect(mergeCategories).to.contain("<div>");
      expect(mergeCategories).to.contain("</div>");
      expect(mergeCategories).to.contain("<select>");
      expect(mergeCategories).to.contain("</select>");
      expect(mergeCategories).to.contain("<option>dog</option>");
      expect(mergeCategories).to.contain("<option>cat</option>");
      expect(mergeCategories).to.not.contain('<!-- Content here -->');
    });
  });
});

const EventEmitter = require('events');
const { expect } = require('chai');
const { getBodyFromRequest } = require('../get-body-from-request');
describe("The getBodyFromRequest function", () => {
  let fakeReq = null;

  beforeEach(() => {
    fakeReq = new EventEmitter();
  });

  it('returns an empty string for no body', done => {
    //Arrange
    const bodyPromise = getBodyFromRequest(fakeReq);
    //Act
    fakeReq.emit("end");
    //Arrange
    bodyPromise
      .then(body => {
        if (body === "") {
          done();
        } else {
          done(`Failed. Got "${body}"`);
        }
      })
  });

  it('returns the data read from the stream', done => {
    //Arrange
    const bodyPromise = getBodyFromRequest(fakeReq);
    const data1 = "this is some";
    const data2 = " data from the browser";
    //Act

    //Assert
  });
});

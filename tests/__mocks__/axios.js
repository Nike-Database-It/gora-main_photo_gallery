module.exports = {
  get: jest.fn(() => Promise.resolve({ data: [{ imageUrls: ['test'] }] })),
};

module.exports = {
  name: 'app11',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app11',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

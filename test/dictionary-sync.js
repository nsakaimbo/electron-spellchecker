import './support';
import path from 'path';
import rimraf from 'rimraf';

import DictionarySync from '../src/dictionary-sync';

let testCount = 0;

describe('The Dictionary Sync class', function() {
  beforeEach(function() {
    this.tempCacheDir = path.join(__dirname, `__dict_sync_${testCount++}`);
    this.fixture = new DictionarySync(this.tempCacheDir);
  });

  afterEach(function() {
    rimraf.sync(this.tempCacheDir);
  });

  describe('loadDictionaryForLanguage method', function() {
    it('should download the German dictionary', async function() {
      let buf = await this.fixture.loadDictionaryForLanguage('de-DE');

      expect(buf.constructor.name).toEqual('Buffer');
      expect(buf.length > 1000).to.be.ok;
    });
  });
});

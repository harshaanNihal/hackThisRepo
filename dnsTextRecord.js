var express = require('express');
var router = express.Router();
const dns = require('dns');

router.get('/:url', function (req, res, next) {
  const { params: { url = '' } = {} } = req;
  dns.resolveTxt(`${url}`, (err, records) => {
    const txtRecord = records ? records.map(([record = '']) => record) : 'No Record Found';
    res.json({
      txt: txtRecord
    });
  });
});

router.get('/:url/:txt', function (req, res, next) {
  const { params: { txt = '', url = '' } = {} } = req;
  dns.resolveTxt(`${url}`, (err, records) => {
    const txtRecord = records ? records.map(([record = '']) => record) : 'No Record Found';
    const validate = txtRecord.some(r => r.includes(txt));
    res.json({
      validate,
      txt: txtRecord
    });
  });
});

module.exports = router;
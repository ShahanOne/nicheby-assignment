const companies = [
  {
    name: 'microsoft-excel',
    image: 'https://nicheby-new.s3.amazonaws.com/files/test_unJRWtl',
  },
  {
    name: 'microsoft',
    image: 'https://nicheby-new.s3.amazonaws.com/files/test_lU1ZzDB',
  },
  {
    name: 'microsoft-word',
    image: 'https://nicheby-new.s3.amazonaws.com/files/test_LebF3wQ',
  },
  {
    name: 'microsoft-office',
    image: 'https://nicheby-new.s3.amazonaws.com/files/test_a5hxKxl',
  },
  {
    name: 'powerpoint',
    image: 'https://nicheby-new.s3.amazonaws.com/files/test_oeZ1V9w',
  },
  {
    name: 'photoshop',
    image: 'https://nicheby-new.s3.amazonaws.com/files/test_QBT9sf1',
  },
  {
    name: 'zoom',
    image: 'https://nicheby-new.s3.amazonaws.com/files/test_Y5PbRaV',
  },
  {
    name: 'salesforce',
    image: 'https://nicheby-new.s3.amazonaws.com/files/test_jliRWgr',
  },
];

export default function handler(req, res) {
  res.json(companies);
}

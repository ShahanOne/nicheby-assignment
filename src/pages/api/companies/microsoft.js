const Microsoft = {
  name: 'microsoft',
  image: 'https://nicheby-new.s3.amazonaws.com/files/test_lU1ZzDB',
};

export default function handler(req, res) {
  res.json(Microsoft);
}

const PowerPoint = {
  name: 'PowerPoint',
  image: 'https://nicheby-new.s3.amazonaws.com/files/test_oeZ1V9w',
};

export default function handler(req, res) {
  res.json(PowerPoint);
}

const MicrosoftOffice = {
  name: 'Microsoft office',
  image: 'https://nicheby-new.s3.amazonaws.com/files/test_a5hxKxl',
};

export default function handler(req, res) {
  res.json(MicrosoftOffice);
}

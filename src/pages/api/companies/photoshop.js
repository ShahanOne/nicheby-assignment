const PhotoShop = {
  name: 'Photoshop',
  image: 'https://nicheby-new.s3.amazonaws.com/files/test_QBT9sf1',
};

export default function handler(req, res) {
  res.json(PhotoShop);
}

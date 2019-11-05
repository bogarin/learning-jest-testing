module.exports = ({ axios }) => ({
  post: async (req, res) => {
    const { data: users } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    const found = users.find(dato => dato.id === req.body.userId);

    if (found) {
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        req.body
      );
      return res.status(201).send(data);
    }
    res.statusSend(500);
  }
});
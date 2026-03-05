function userForm(req, resp) {
    resp.write(`
        
<form action="/submit" method="post">
    <input type="text" placeholder="Enter name" name="name" />
    <br><br>
    <input type="email" placeholder="Enter email" name="email" />
    <br><br>
    <button type="submit">Submit</button>
</form>

    `);
}

module.exports = userForm;

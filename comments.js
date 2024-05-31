// Create web server
// 1. Import express
const express = require('express');
// 2. Create web server
const app = express();
// 3. Bind port
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
// 4. Create router
app.get('/', (req, res) => {
    res.send('Hello World');
});
// 5. Create router
app.get('/comment', (req, res) => {
    res.send('This is comment page');
});
// 6. Create router
app.get('/post', (req, res) => {
    res.send('This is post page');
});
// 7. Create router
app.get('/user', (req, res) => {
    res.send('This is user page');
});
// 8. Create router
app.get('/profile', (req, res) => {
    res.send('This is profile page');
});
// 9. Create router
app.get('/setting', (req, res) => {
    res.send('This is setting page');
});
// 10. Create router
app.get('/login', (req, res) => {
    res.send('This is login page');
});
// 11. Create router
app.get('/register', (req, res) => {
    res.send('This is register page');
});
// 12. Create router
app.get('/archive', (req, res) => {
    res.send('This is archive page');
});
// 13. Create router
app.get('/search', (req, res) => {
    res.send('This is search page');
});
// 14. Create router
app.get('/contact', (req, res) => {
    res.send('This is contact page');
});
// 15. Create router
app.get('/about', (req, res) => {
    res.send('This is about page');
});
// 16. Create router
app.get('/help', (req, res) => {
    res.send('This is help page');
});
// 17. Create router
app.get('/error', (req, res) => {
    res.send('This is error page');
});
// 18. Create router
app.get('/faq', (req, res) => {
    res.send('This is faq page');
});
// 19. Create router
app
    
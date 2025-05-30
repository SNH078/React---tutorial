function Footer(){
    var x =new Date();
var y = x.getFullYear();
    return(
<footer>
    <p>&copy; {y} My Company </p>
</footer>
);
}
export default Footer
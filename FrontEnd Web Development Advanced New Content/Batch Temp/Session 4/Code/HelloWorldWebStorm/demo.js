/**
 * Created by SaiKiran on 30/12/16.
 */
function ScopeTest(){
    if(true){
        var foo = "Use anywhere";
        let bar = "use in this block";
    }
    
    console.log(foo);
    console.log(bar);
}
ScopeTest();

enum Category {Biography, Fiction, Poetry} // 0, 1, 2

enum Category {Biography = 1, Fiction, Poetry} // 1, 2, 3

enum Category {Biography = 9, Poetry = 1, Fiction = 10} // 9, 1, 10
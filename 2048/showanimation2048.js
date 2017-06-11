function showNumberAnimation( i , j , randNumber ){

    var numberCell = $('#number-cell-' + i + "-" + j );

    numberCell.css('background-color',getBackGroundColor( randNumber ) );
    numberCell.css('color',getNumberColor( randNumber ) );
    numberCell.text( randNumber );

    numberCell.animate({
        width:'100px',
        height:'100px',
        top:getPosTop( i , j ),
        left:getPosLeft( i , j )
    },50);
}
function showMoveAnimation( fromx , fromy , tox, toy ){

    var numberCell = $('#number-cell-' + fromx + '-' + fromy );
    numberCell.animate({
        top:getPosTop( tox , toy ),
        left:getPosLeft( tox , toy )
    },200);
}
function updateScore(score)
{
    $('#score').text(score);
} /**
 * Created by Administrator on 2017/6/10.
 */

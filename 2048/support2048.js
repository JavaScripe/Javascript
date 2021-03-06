//用来数字定位的函数
function getPosTop(i,j)
{
    return 20+i*120;
}
function getPosLeft(i,j)
{
    return 20+j*120;
}
//设置数字颜色的函数
function getBackGroundColor(number)
{
    switch(number)
    {
        case 2:return "#FFC43D";break;
        case 4:return "#EF476F";break;
        case 8:return "#1B9AAA";break;
        case 16:return "#06D6A0";break;
        case 32:return "#f37694";break;
        case 64:return "#22c2d6";break;
        case 128:return "#17f8be";break;
        case 256:return "#ffd470";break;
        case 512:return "#eb184a";break;
        case 1024:return "#14727e";break;
        case 2048:return "#09c";break;
        case 4096:return "#a6c";break;
        case 8192:return "#93c";break;
    }
    return "black";
}
function getNumberColor( number ){
    if( number <= 5 )
        return "#776e65";

    return "white";
}
//判断有没有空间移动
function noSpace(board)
{
    for(var i=0;i<5;i++)
    {
        for (var j=0;j<5;j++)
        {
            if(board[i][j]==0)
            {
                return false;
            }
        }
    }
    return true;
}
//判断能否向左移
function canMoveLeft(board)
{
    for(var i=0;i<5;i++)
    {
        for (var j=1;j<5;j++)
        {
            if(board[i][j]!=0)
            {
                if(board[i][j-1]==0||board[i][j-1]==board[i][j])
                {
                    return true;
                }
            }
        }
    }
    return false;
}
function canMoveUp(board)
{
    for(var i=1;i<5;i++)
    {
        for (var j=0;j<5;j++)
        {
            if(board[i][j]!=0)
            {
                if(board[i-1][j]==0||board[i-1][j]==board[i][j])
                {
                    return true;
                }
            }
        }
    }
    return false;
}
function canMoveRight(board)
{
    for(var i=0;i<5;i++)
    {
        for (var j=0;j<4;j++)
        {
            if(board[i][j]!=0)
            {
                if(board[i][j+1]==0||board[i][j+1]==board[i][j])
                {
                    return true;
                }
            }
        }
    }
    return false;
}
function canMoveDown(board)
{
    for(var i=0;i<4;i++)
    {
        for (var j=0;j<5;j++)
        {
            if(board[i][j]!=0)
            {
                if(board[i+1][j]==0||board[i+1][j]==board[i][j])
                {
                    return true;
                }
            }
        }
    }
    return false;
}
function noRowBlock(row,col1,col2,board)
{
    for(var i=col1+1;i<col2;i++)
    {
        if(board[row][i]!=0)
        {
            return false;
        }
    }
    return true;
}
//判断有无障碍物
function noColBlock(col,row1,row2,board)
{
    for(var i=row1+1;i<row2;i++)
    {
        if(board[i][col]!=0)
        {
            return false;
        }
    }
    return true;
}/**
 * Created by Administrator on 2017/6/10.
 */

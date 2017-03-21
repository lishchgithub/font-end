display:flex;//-webkit-flex...
the attribute of flex:
 flex-direction: row | row-reverse | column | column-reverse;
row（默认值）	主轴为水平方向，起点在左端。
row-reverse	主轴为水平方向，起点在右端。
column	主轴为垂直方向，起点在上沿。
column-reverse	主轴为垂直方向，起点在下沿。
 flex-wrap: nowrap | wrap | wrap-reverse;
 nowrap（默认）：不换行。 
 wrap:超出换行。
 wrap-reverse:the first row is start from the buttom of block;
 flex-flow: <flex-direction> || <flex-wrap>;
 this attribution is the sum of flex-direction and flex-wrap;
 justify-content: flex-start | flex-end | center | space-between | space-around;
 this attribution is control the surplus area of the main-axis:
 flex-start:put the cell from the start of the main-axis,the surplus area is stay at the end;
 flex-end:opposite of flex-start;
 center:the surplus of start and end is the same,and the interval of cells is zero;
 
 align-items: flex-start | flex-end | center | baseline | stretch;
 align-content: flex-start | flex-end | center | space-between | space-around | stretch;


var boardModel = { 
	boardState: [],
	buildBoard: function(boardDimension) {
			if (this.boardState == []) { // only build an empty board if the server has been restarted
				var newBoard = [];
				for(var i = 0; i < boardDimension; i++) {
					var innerArray = [];
					for(var j = 0; j < boardDimension; j++) {
						innerArray.push(null);
					};
					newBoard.push(innerArray);
				};
				this.boardState = newBoard;
			}
		},
	getBoardState: function() {
			return this.boardState;
		},
	addMove: function(row, column, nextPlayer) {
			var err;
			console.log(row, column, nextPlayer)
			if(this.boardState[row][column] == null) {	
				if(nextPlayer) {
					this.boardState[row][column] = 'x';
				} else {
					this.boardState[row][column] = 'o';
				};
				err = false;
			} else {
				err = 'that square has been played, tool';
			};
			return err
		},
	setBoardState: function(newBoardState) {
			this.boardState = newBoardState;
		}
};

module.exports = boardModel;

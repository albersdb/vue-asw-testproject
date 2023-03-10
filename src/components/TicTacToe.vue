<template>
  <v-container class="v-col-xl-3 v-col-lg-4 v-col-md-6 v-col-sm-8 v-col-xs-4">
    <v-row v-if="!winner && hasEmptyCells">
      <v-col>
        <v-alert color="info" class="text-center">
          Next player: {{ currentPlayer }}
        </v-alert>
      </v-col>
    </v-row>
    <v-row v-if="winner">
      <v-col>
        <v-alert color="success" class="text-center">
          Player {{ winner }} Wins!
        </v-alert>
      </v-col>
    </v-row>
    <v-row v-else-if="!winner && !hasEmptyCells">
      <v-col>
        <v-alert color="warning" class="text-center">Tie!</v-alert>
      </v-col>
    </v-row>
    <v-spacer class="mb-5"></v-spacer>
    <v-row>
      <v-col
        v-for="(cell, index) in cells"
        :key="index"
        cols="4"
        justify-content="center"
      >
        <v-card
          class="card"
          color="grey-darken-3"
          @click="cellClicked(index)"
          :disabled="!!cell || !!winner"
          justify-content="center"
        >
          <v-card-item v-if="cell == 'X'">
            <svg viewBox="0 0 100 100">
              <line class="x-marker" x1="10" y1="10" x2="90" y2="90" />
              <line class="x-marker" x1="10" y1="90" x2="90" y2="10" />
            </svg>
          </v-card-item>
          <v-card-item v-else-if="cell == 'O'">
            <svg viewBox="0 0 100 100">
              <path
                class="o-marker"
                d="M 50,10
                A 40,40 0 0,1 90,50
                A 40,40 0 0,1 50,90
                A 40,40 0 0,1 10,50
                A 40,40 0 0,1 50,10 Z"
              />
            </svg>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
    <v-spacer class="mb-5"></v-spacer>
    <v-row v-if="winner || !hasEmptyCells">
      <v-col columns="12">
        <v-btn color="info" class="" @click="resetGame()">Reset Game</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cells: Array(9).fill(null),
      currentPlayer: "X",
      winner: null,
    };
  },
  computed: {
    hasEmptyCells() {
      return this.cells.some((cell) => cell === null);
    },
  },
  methods: {
    resetGame() {
      this.cells = Array(9).fill(null);
      this.currentPlayer = "X";
      this.winner = null;
    },
    cellClicked(index) {
      if (this.cells[index] !== null || this.winner) {
        return;
      }

      this.cells[index] = this.currentPlayer;

      if (this.checkWin()) {
        this.winner = this.currentPlayer;
      } else if (!this.hasEmptyCells) {
        this.winner = false;
      } else {
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
      }
    },
    checkWin() {
      const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // rows
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // columns
        [0, 4, 8],
        [2, 4, 6], // diagonals
      ];

      return winConditions.some((condition) =>
        condition.every((index) => this.cells[index] === this.currentPlayer)
      );
    },
  },
};
</script>

<style>
.card {
  cursor: pointer;
  width: 110px;
  height: 110px;
}

.x-marker {
  stroke: #ff0000; /* red stroke color */
  stroke-width: 10px; /* stroke width */
  stroke-linecap: round; /* rounded line ends */
}

.o-marker {
  fill: none;
  stroke: #33cc88;
  stroke-width: 10px;
}
</style>

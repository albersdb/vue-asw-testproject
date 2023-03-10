<template>
  <v-container>
    <v-row>
      <v-col v-for="(cell, index) in cells" :key="index" cols="4">
        <v-card
          class="text-center card"
          color="primary"
          @click="cellClicked(index)"
          :disabled="!!cell || winner"
        >
          <v-card-text class="display-1">{{ cell }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-if="winner">
      <v-col>
        <v-alert color="success" class="text-center">
          {{ winner }} wins!
        </v-alert>
      </v-col>
    </v-row>

    <v-row v-else-if="!winner && !hasEmptyCells">
      <v-col>
        <v-alert color="info" class="text-center">Tie!</v-alert>
      </v-col>
    </v-row>

    <v-row v-if="winner || !hasEmptyCells">
      <v-btn @click="resetGame()">Reset Game</v-btn>
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.card {
  cursor: pointer;
  width: 100px;
  height: 100px;
}

.card-text {
  font-size: 4rem;
  font-weight: bold;
}

.success {
  margin-top: 20px;
}

.info {
  margin-top: 20px;
}
</style>

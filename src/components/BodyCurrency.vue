<template>
  <div class="body-currency">
    <b-card-text>
      <b-row>
        <b-col>
          <p><b> {{currency.currency}} </b></p>
        </b-col>
        <b-col>
          <p class="text-right amount_currency">{{currency.currency}} {{currency.amount}}</p>
        </b-col>
      </b-row>

      <small>{{currency.currency}} - {{currency.currency_text}}</small>
      <p><small>1 USD = {{currency.currency}} {{currency.rates}}</small></p>
      <b-button variant="outline-primary remove" size="sm" @click="deleteCurrency(currency)" id="remove_currency">Remove</b-button>
    </b-card-text>
  </div>
</template>

<script>

  export default {
  name: 'BodyCurrency',
  props: {
    currency: {
      default() {
        return {
            currency: '' ,
            amount: 0,
            currency_text: 0,
            rates: 0,
        };
      },
      type: Object,
    }
  },
  methods: {
    deleteCurrency(currency) {
      this.$emit("delete", currency);
    },
  },
};
</script>
<style scoped>
  .body-currency {
    padding: 18px;
    border: 1px solid #7777;
    margin: 15px;
    border-radius: 5px;
  }

  .remove {
    width: -webkit-fill-available;
  }
</style>
<template>
  <b-container class="bv-example-row mt-10">
    <b-row class="justify-content-md-center">
      <div class="currency-app">
        <div class="head-currency">
          <b-card-text>
            <p><b> USD - United States Dollar </b></p>
            <b-input-group size="sm" prepend="USD">
              <b-form-input v-model="initiated_amount" number id="input_usd"></b-form-input>
            </b-input-group>
          </b-card-text>
        </div>
        <hr />
        <body-currency v-for="(item,index) in currencies" :key="index" :currency="item"
          @delete="deleteCurrency">

        </body-currency>
        <div id="add_currency_btn">
          <b-button variant="primary add-currency" id="add-currency" @click="seen = true" v-if="!seen">
            <b-icon icon="plus"></b-icon>
            Add Currency
          </b-button>

          <div class="input_currency" v-if="seen">
            <b-form-select v-model="selected" :options="options" id="select_currency"></b-form-select>
            <b-button class="submit" variant="primary" id="submit_currency" @click="addCurrency() ">
              Submit
            </b-button>
          </div>
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
  import BodyCurrency from '../components/BodyCurrency.vue';

  export default {
    name: 'CurrencyApp',
    components: {
      BodyCurrency,
    },
    data() {
      return {
        currencies: [],
        initiated_amount: 10,
        seen: false,
        selected: 'USD',
        options: [{
            value: 'USD',
            text: 'United States Dollar'
          },
          {
            value: 'CAD',
            text: 'Canadian Dollar'
          },
          {
            value: 'IDR',
            text: 'Indonesian Rupiah'
          },
          {
            value: 'GBP',
            text: 'Great Britain Pound'
          },
          {
            value: 'CHF',
            text: 'Confoederatio Helvetica Franc'
          },
          {
            value: 'SGD',
            text: 'Dollar Singapura'
          },
          {
            value: 'INR',
            text: 'Rupee India'
          },
          {
            value: 'MYR',
            text: 'Ringgit Malaysia'
          },
          {
            value: 'JPY',
            text: 'Japanese Yen'
          },
          {
            value: 'KRW',
            text: 'Won Korea'
          },
        ],
        allcurrencies: null
      };
    },
    mounted() {
      this.$http.get('https://api.exchangeratesapi.io/latest?base=USD')
      .then(response => {
        this.allcurrencies = response.data;
      })
    },
    watch: {
      initiated_amount(newValue) {
        for (let i = 0; i < this.currencies.length; i++) {
            this.currencies[i].amount = newValue * this.currencies[i].rates;
        }
      },
    },
    methods: {
      addCurrency() {
        const currency = {
          currency: this.selected,
          amount: this.initiated_amount * this.allcurrencies.rates[this.selected],
          currency_text: this.options.find(x => x.value === this.selected).text,
          rates: this.allcurrencies.rates[this.selected],
        };
        this.currencies.push(currency);
        this.seen = false; 
      },
      deleteCurrency(currency) {
        const index = this.currencies.indexOf(currency); 
        this.currencies.splice(index, 1); 
      },
    },
  };
</script>


<style scoped>
  .currency-app {
    border: 1px solid #5555;
    border-radius: 5px;
    margin-top: 40px;
    width: 500px;
  }

  .head-currency {
    padding: 6px 18px;
  }

  .card {
    width: -webkit-fill-available;
  }

  .add-currency {
    width: -webkit-fill-available;
    margin: 15px;
  }

  .input_currency {
    margin: 15px;
    display: flex;
  }

  .submit {
    height: fit-content;
  }
</style>
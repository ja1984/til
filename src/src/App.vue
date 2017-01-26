<template>
  <div id="app">
    <HeaderBar></HeaderBar>
    <div class="card-container">
      <div class="card" v-for="link in links">
        <div class="card-content">
          <div class="card-title">
            <strong>
				<a href="javascript:void(0);" :href="link.url.href" target="_blank">{{link.title}}</a>
			  </strong>
            <img src="" :src="link.image"  />
          </div>
          <div class="card-description">
            {{link.description}}
          </div>
          <div class="card-footer">
			<img src="" :src="link.favicon"/> 

			<span>{{link.url.protocol}}//</span><span class="host">{{link.url.hostname}}</span><span>{{link.url.path}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderBar from './components/Header';

  export default {
    name: 'app',
    components: {
      HeaderBar
    },
    created: function () {
      var store = this.$store;
      window.addEventListener('paste', function (e) {
        store.dispatch('addLink', e.clipboardData.getData('text/plain'));
      });
    },
    data () {
      return {
        links: this.$store.state.links
      };
    }
  };
</script>

<style>
body{
	font-family: 'Open Sans', sans-serif;
	font-size: .9rem;
	background: #f9f9f9;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 4rem; 
}

a{
	text-decoration: none;
	color:#0288D1;
	transition: color ease .3s;
}

a:hover{
	color: #0277BD;
	text-decoration: underline;
}

.card-container{
	display: flex;
	width: 100%;
	max-width:980px;
	margin: 0 auto;
	flex-flow: row wrap;
}

.card{
	padding: .5rem;
	width: 100%;
	box-sizing: border-box;
}

.card-content{
	border-radius: 0px;
	text-align: left;
	padding: 1rem;
	background: #fff;
	border: 1px solid #f2f2f2;
	transition: border-color ease .2s;
}

.card-content:hover{
	border-color: #eee;
}

.card-title{
	position: relative;
	height: 3rem;
}
.card-title strong{
	line-height: 3rem;
}
.card-title img{
	position: absolute;
	height: 3rem;
	right: 0;
	top: 0;
}

.card-title, .card-description{
	margin-bottom: 1rem;
}

.card-image img{
	max-width: 100%;
	height: auto;
}

.card-footer{
	color: #bbb;
}

.card-footer img{
	vertical-align: sub;
	margin-right: .4rem;
}

.card-footer .host{

	color: #333;
}
</style>
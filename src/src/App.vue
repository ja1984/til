<template>
  <div id="app">
	<HeaderBar></HeaderBar>
<div class="card-container">
	<div class="card">
		<div class="card-content">
		<div class="card-title">
			<strong>
				<a href="#">Using Fetch</a>
			</strong>
			<img src="https://developer.cdn.mozilla.net/static/img/opengraph-logo.dc4e08e2f6af.png" />
		</div>
		<div class="card-description">
			This kind of functionality was previously achieved using XMLHttpRequest. Fetch provides a better alternative that can be easily used by other technologies such as Service Workers. Fetch also provides a single logical place to define other HTTP-related concepts such as CORS and extensions to HTTP. 
		</div>
		<div class="card-footer">
			Mozilla Developer Network
		</div>
	</div>
	</div>
	<div class="card">
		<div class="card-content">
		<div class="card-title">
			<strong>
				<a href="#">Using Fetch</a>
			</strong>
			<img src="https://developer.cdn.mozilla.net/static/img/opengraph-logo.dc4e08e2f6af.png" />
		</div>
		<div class="card-description">
			This kind of functionality was previously achieved using XMLHttpRequest. Fetch provides a better alternative that can be easily used by other technologies such as Service Workers. Fetch also provides a single logical place to define other HTTP-related concepts such as CORS and extensions to HTTP. 
		</div>
		<div class="card-footer">
			Mozilla Developer Network
		</div>
	</div>
	</div>
	<div class="card">
		<div class="card-content">
		<div class="card-title">
			<strong>
				<a href="#">Using Fetch</a>
			</strong>
			<img src="https://developer.cdn.mozilla.net/static/img/opengraph-logo.dc4e08e2f6af.png" />
		</div>
		<div class="card-description">
			This kind of functionality was previously achieved using XMLHttpRequest. Fetch provides a better alternative that can be easily used by other technologies such as Service Workers. Fetch also provides a single logical place to define other HTTP-related concepts such as CORS and extensions to HTTP. 
		</div>
		<div class="card-footer">
			Mozilla Developer Network
		</div>
	</div>
	</div>
	<div class="card">
		<div class="card-content">
		<div class="card-title">
			<strong>
				<a href="#">Using Fetch</a>
			</strong>
			<img src="https://developer.cdn.mozilla.net/static/img/opengraph-logo.dc4e08e2f6af.png" />
		</div>
		<div class="card-description">
			This kind of functionality was previously achieved using XMLHttpRequest. Fetch provides a better alternative that can be easily used by other technologies such as Service Workers. Fetch also provides a single logical place to define other HTTP-related concepts such as CORS and extensions to HTTP. 
		</div>
		<div class="card-footer">
			Mozilla Developer Network
		</div>
	</div>
	</div>
	<div class="card">
		<div class="card-content">
		<div class="card-title">
			<strong>
				<a href="#">Using Fetch</a>
			</strong>
			<img src="https://developer.cdn.mozilla.net/static/img/opengraph-logo.dc4e08e2f6af.png" />
		</div>
		<div class="card-description">
			This kind of functionality was previously achieved using XMLHttpRequest. Fetch provides a better alternative that can be easily used by other technologies such as Service Workers. Fetch also provides a single logical place to define other HTTP-related concepts such as CORS and extensions to HTTP. 
		</div>
		<div class="card-footer">
			Mozilla Developer Network
		</div>
	</div>
	</div>
	<div class="card">
		<div class="card-content">
		<div class="card-title">
			<strong>
				<a href="#">Using Fetch</a>
			</strong>
			<img src="https://developer.cdn.mozilla.net/static/img/opengraph-logo.dc4e08e2f6af.png" />
		</div>
		<div class="card-description">
			This kind of functionality was previously achieved using XMLHttpRequest. Fetch provides a better alternative that can be easily used by other technologies such as Service Workers. Fetch also provides a single logical place to define other HTTP-related concepts such as CORS and extensions to HTTP. 
		</div>
		<div class="card-footer">
			Mozilla Developer Network
		</div>
	</div>
	</div>
</div>

	


  </div>
</template>

<script>
import HeaderBar from './components/Header'

export default {
  name: 'app',
  components: {
    HeaderBar
  },
  created: function () {
    window.addEventListener('paste', function (e) {
      console.log(e.clipboardData.getData('text/plain'))
    })
  }
}
</script>

<style>
body{
	background: #fff;
	font-family: 'Open Sans', sans-serif;
	font-size: .9rem;
	background: #f9f9f9;

}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
	max-width: 1200px;
	margin: 0 auto;
	flex-flow: row wrap;
}

.card{
	padding: .5rem;
	width: 25%;
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

</style>

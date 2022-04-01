var referenceLink = "";
function reference(link) {
	referenceLink = link;
	const headerContent = `
	<img src="${link}hoc.png" onClick='window.location.href="${link}index.html";' id="favicon" style="float:left">
	<a style="float:left;" href="${link}tutorials/propose.html">Propose Tutorial</a>
	<a style="float:left;" href="${link}tutorials/index.html">Tutorials</a>
	<a style="float:left;" href="${link}about.html">About</a>
	<button style="float:right;">
		<a href="https://github.com/happexx/ScratchTutorials/issues/new">Feedback</a>
	</button>
	<img onClick="changeTheme()" style="float:right;" src="${link}assets/theme.svg">`
	document.getElementById("nav").innerHTML = headerContent;

	const footerContent = `
	<div style="display:flex;">
		<div style="width:100%;">
			<h4>About</h4><br>
			<a href="${link}about.html">About us</a><br>
			<a href="${link}credits.html">Credits</a><br>
			<a href="${link}privacy.html">Privacy</a><br>
			<a href="${link}statistics.html">Statistics</a>
		</div>
		<div style="width:100%;">
			<h4>Contact Us</h4><br>
			<a href="https://scratch.mit.edu/users/happex/#comments">On Scratch</a><br>
			<a href="https://github.com/happexx/happexx/discussions">On Github</a>
		</div>
		<div style="width:100%;">
			<h4>Community</h4><br>
			<a href="https://scratch.mit.edu/discuss">Scratch Discuss</a><br>
			<a href="https://wiki-scratch.info">Scratch Wiki</a><br>
			<a href="https://scratch.mit.edu/studios/x/comments">Community Portal</a>
		</div>
		<div style="width:100%;">
			<button class="redBtn screen-120"><a href="https://github.com/happex/scratchtutorials/issues/new">Report an Error</a></button>
		</div>
	</div>`
	document.getElementById("footer").innerHTML = footerContent;
}

var referenceLink = "";
function reference(link) {
	referenceLink = link;
	const headerContent = `
	<img class="px-120 px-80 px-60" src="${link}hoc.png" onClick='window.location.href="${link}index.html";' id="favicon" style="float:left">
	<a class="px-120" style="float:left;" class="px-120 px-60"  href="${link}tutorials/propose.html">Propose Tutorial</a>
	<a style="float:left;" href="${link}tutorials/index.html">Tutorials</a>
	<a class="px-120 px-80" style="float:left;" href="${link}about.html">About</a>
	<button class="px-120" style="float:right;">
		<a href="https://github.com/happexx/ScratchTutorials/issues/new">Feedback</a>
	</button>
	<img class="px-120 px-80" onClick="changeTheme()" style="float:right;" src="${link}assets/theme.svg">`
	document.getElementById("nav").innerHTML = headerContent;

	const footerContent = `
	<div style="display:flex;">
		<div style="width:100%;">
			<h4>About</h4><br>
			<a href="${link}about.html">About us</a><br>
			<a href="${link}credits.html">Credits</a><br>
			<a href="${link}privacy.html">Privacy</a><br>
			<a href="${link}statistics.html">Statistics</a>
			<a href="${link}contribute.html">Contribute</a>
		</div>
		<div style="width:100%;">
			<h4>Contact Us</h4><br>
			<a href="https://scratch.mit.edu/users/happex/#comments">On Scratch</a><br>
			<a href="https://github.com/happexx/happexx/discussions">On Github</a>
		</div>
		<div class="px-120 px-80" style="width:100%;">
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

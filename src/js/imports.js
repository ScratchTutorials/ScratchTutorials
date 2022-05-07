var referenceLink = "";
function reference(link) {
	referenceLink = link;
	const headerContent = `
    <img id="navbarFavicon" src="${link}favicon.png" onClick='window.location.href="${link}index.html";' id="favicon" style="float:left">
    <a id="navbarProposeLink" style="float:left" href="${link}tutorials/propose.html">Propose Tutorial</a>
    <img id="navbarProposeIcon" src="${link}assets/tutorials-add.svg" onClick="window.location.href='${link}tutorials/propose.html'">
    <a id="navbarTutorialsLink" style="float:left;" href="${link}tutorials/index.html">Tutorials</a>
    <img id="navbarTutorialsIcon" src="${link}assets/tutorials.svg" onClick="window.location.href='${link}tutorials'">
    <a id="navbarAboutLink" style="float:left;" href="${link}about.html">About</a>
    <button id="navbarFeedbackButton" style="float:right;">
        <a href="https://github.com/ScratchTutorials/ScratchTutorials/issues/new">Feedback</a>
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
			<a href="${link}contribute.html">Contribute</a>
		</div>
		<div style="width:100%;">
			<h4>Contact Us</h4><br>
			<a href="mailto:scratchtutorials@users.noreply.github.com">By Email</a><br>
			<a href="https://scratch.mit.edu/discuss/topic/601563/">On Scratch</a><br>
			<a href="https://github.com/ScratchTutorials/ScratchTutorials/discussions">On Github</a>
		</div>
		<div class="px-120 px-80" style="width:100%;">
			<h4>Community</h4><br>
			<a href="https://scratch.mit.edu/discuss">Scratch Discuss</a><br>
			<a href="https://scratch-wiki.info/">Scratch Wiki</a><br>
			<a href="https://scratch.mit.edu/discuss/">Scratch Forum</a><!--br>
			<a href="https://scratch.mit.edu/studios/x/comments">Community Portal</a-->
		</div>
		<div class="px-120 px-80" style="width:100%;">
			<h4>Resources</h4><br>
			<a href="https://scratch.mit.edu/download">Download Scratch</a><br>
			<a href="https://scratch.mit.edu/ideas">Official Tutorials</a><br>
			<a href="https://scratchstats.com">Scratchstats</a>
		</div>
		<div style="width:100%;">
			<button class="redBtn screen-120"><a href="https://github.com/ScratchTutorials/ScratchTutorials/issues/new">⚠️ Report an Error</button><br>
		</div>
	</div>`
	document.getElementById("footer").innerHTML = footerContent;
	
	/* var recentTutorials = localStorage.getItem("st-recent");
	var i = 0;
	for (i == 0, i < recentTutorials.length, i++) {
		var section = document.getElementById("recent");
		const addition = `
		<div>
			<img src="${link}assets/tutos/${recentTutorials[i].title}/cover.svg"><br>
			<a class="tuto-title" href="${link}tutorials/${recentTutorials[i].title}">${recentTutorials[i].title}</a><br>
			<span class="tuto-author">By <a href="https://scratch.mit.edu/users/${recentTutorials[i].author}">${recentTutorials[i].author}</a></span>
		</div>`
		section += addition;
	}
	for (i == 0, i < 4, i++) {
		var section = document.getElementById("recent");
		const addition = `
		<div></div>`
		section += addition;
	} */
}

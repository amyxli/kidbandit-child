var welcome = {};

// --------------  things that vary from task to task --------------

welcome.task = {};
welcome.task.blurb = '<b>"The Monsters Game"</b> is a short psychological study investigating how people make decisions. <br> This is a <b> demo of the child version of the study containing 20 trials. </b>Data will save locally as a .csv file after completing the task.';
welcome.task.time = '15-20 minutes';
welcome.task.pay = 'US$0.85';

// --------------  things that vary between ethics approvals --------------

welcome.ethics = {};
welcome.ethics.approval = '2575';
welcome.ethics.name = 'Explore exploit dilemmas in a complex environment';
welcome.ethics.selection = 'You are invited to participate in a study of how people make decisions.  We hope to learn what information people use to guide their choices when faced with an uncertain world. You were selected as a possible participant in this study because you accepted our HIT on Amazon Mechanical Turk.';
welcome.ethics.description = 'If you decide to participate, we will present you with a series of decisions that takes the form of a simple guessing game. Detailed instructions will be provided once the task begins. The exact number of choices you need to make depends on which version of the task the computer assigns you to, but the on-screen display will inform you of how much further you have to go. The task should take approximately ' + welcome.task.time + ' to complete including reading time.';


// ----------------------- function to start the task ------------------
welcome.run = function() {
    document.getElementById("welcome").innerHTML =
        welcome.section.header +
        welcome.section.start +
        welcome.section.consent +
        welcome.section.demographics;
}

// ------------- actions to take at the end of each click ----------------
welcome.click = {};
welcome.click.start = function() {
    welcome.helpers.setDisplay('start', 'none');
    welcome.helpers.setDisplay('consent', '');
    welcome.helpers.setHeader(' ');
}
welcome.click.consent = function() {
    welcome.helpers.setDisplay('consent', 'none');
    welcome.helpers.setDisplay('demographics', '');
    welcome.helpers.setHeader(' ');
}
welcome.click.demographics = function() {
    welcome.helpers.setDisplay('demographics', 'none');
    welcome.helpers.setDisplay('header', 'none');
    jsPsych.data.addProperties({  // record the condition assignment in the jsPsych data
        subjID: document.getElementById("subjID").value,
        gender: document.getElementById("gender").value,
        age: document.getElementById("age").value,
        dob: document.getElementById("dob").value,
        dot: document.getElementById("dot").value,
        language: document.getElementById("language").value,
    });
    startExperiment(); // start the jsPsych experiment
}


// ------------- html for the various sections ----------------
welcome.section = {};
welcome.section.header =
    '<!-- ####################### Heading ####################### -->' +
    '<a name="top"></a>' +
    '<h1 style="text-align:center; width:1000px" id="header" class="header">' +
    '   &nbsp; UNSW Computational Cognitive Science</h1>';

welcome.section.start =
    '<!-- ####################### Start page ####################### -->' +
    '<div class="start" style="width: 900px">' +
    '<div class="start" style="text-align:left; border:0px solid; padding:10px;' +
    '                          width:800px; float:right; font-size:90%">' +
    welcome.task.blurb + ' <br><br>The study involves the following steps:</p>' +
    '<ol>' +
    '<li> Because this is a University research project, we ask for informed consent in the adult version of the task. ' +
    '     (Skip through this screen for children.)<br></li>' +
    '<li> We ask for demographic information and participant ID. From this point on, please follow the protocol.</li>' +
    '<li> The study (and the experimenter) then explain how to do the task in detail. <br></li>' +
    '<li> Next comes the experiment itself.<br></li>' +
    '</ol>' +
    '<p>The total time taken should be about ' + welcome.task.time + '. Please <u>do not</u> use the "back" ' +
    '   button on your browser or close the window until you reach the end' +
    '. This is very likely to break the experiment. When you are ready to begin, click on' +
    '   the "start" button below.</p>' +
    '<!-- Next button for the splash page -->' +
    '<p align="center"> <input type="button" id="splashButton" class="start jspsych-btn" ' +
    'value="Start!" onclick="welcome.click.start()"> </p>' +
    '</div>' +
    '</div>';

welcome.section.consent =
    '	<!-- ####################### Consent ####################### -->' +
    '	<div class="consent" style="display:none; width:900px">' +
    '		<!-- Text box for the splash page -->' +
    '		<div class="consent" style="text-align:left; border:0px solid; padding:10px;  width:800px; font-size:90%; float:right">' +
    '			<p align="right">Approval No ' + welcome.ethics.approval + '</p>' +
    '			<p align="center"><b>THE UNIVERSITY OF NEW SOUTH WALES<br>' +
    '			PARTICIPANT INFORMATION STATEMENT</b><br><br>' + welcome.ethics.name + '</p>' +
    '			<p><b>Participant Selection and Purpose of Study</b></p>' +
    '			<p>' + welcome.ethics.selection + '</p>' +
    '			<p><b>Description of Study and Risks</b></p>' +
    '			<p>' + welcome.ethics.description + '</p>' +
    '			<p>No discomforts or inconveniences besides some boredom are reasonably expected. No risks are reasonably expected as a result of your participation in this study. We cannot and do not guarantee or promise that you will receive any benefits from this study.</p>' +
    '			<p><b>Confidentiality and Disclosure of Information</b></p>' +
    '			<p>Any information that is obtained in connection with this study and that can be identified with you will remain confidential and will be disclosed only with your permission or except as required by law.  If you give us your permission by clicking on the "I agree" button below, we plan to publish the results in academic journals and discuss the results at scientific conferences. In any publication, information will be provided in such a way that you cannot be identified.</p>' +
    '			<p><b>Recompense to participants</b></p>' +
    '			<p>As stated on the Amazon Mechanical Turk page, the pay for completing this HIT is <b>' + welcome.task.pay + '</b></p>' +
    '			<p><b>Your consent</b></p>' +
    '			<p>Your decision whether or not to participate will not prejudice your future relations with The University of New South Wales.  If you decide to participate, you are free to withdraw your consent and to discontinue participation at any time without prejudice.</p>' +
    '			<p><b>Inquiries</b></p>' +
    '			<p>If you have any questions or concerns following your participation, Associate Professor Danielle Navarro (+61 4 2148 8402, email. d.navarro@unsw.edu.au) will be happy to address them. Complaints about the study may be directed to UNSW&#8217;s Research Ethics and Compliance Support, (phone +61 2 9385 4235 or +61 2 9385 4958, email. humanethics@unsw.edu.au).<p> ' +
    '			<p>Please keep a copy of this information sheet.</p>' +
    '			<br>' +
    '			<p align="center"><b>PARTICIPANT CONSENT</b></p>' +
    '			By continuing, you are making a decision whether or not to participate.  Clicking the button below indicates that, having read the information provided on the participant information sheet, you have decided to participate.' +
    '			<br>' +
    '			<p align="center">' +
    '           <input type="button" id="consentButton" class="consent jspsych-btn" value="I agree" onclick="welcome.click.consent()" >' +
    '			</p>' +
    '			<p>To withdraw your consent, simply close the browser tab and return the HIT. Your data will be deleted from our records.</p>' +
    '		</div><br><br></div>';

welcome.section.demographics =
 '	<!-- ####################### Demographics ####################### -->' +
    '	<div class="demographics" style="display:none; align:center; width: 900px">' +
    '		<div class="demographics" style="text-align:left; border:0px solid; padding:10px;  width:800px; font-size:90%; float:right">' +
    '            <p font-size:140%><b>Demographic information</b></p>' +
    '     <!-- Subject ID -->' +
    '           <label for="subjID"><b>ID (e.g. I001): &nbsp;</b></label><input id="subjID" name="subjID" /><br /><br />' +
    '			<!-- Gender -->' +
    '           <label for="age"><b>Gender: &nbsp;</b></label><input id="gender" name="gender" /><br /><br />' +
    '			<!-- Age -->' +
    '           <label for="age"><b>Age: &nbsp;</b></label><input id="age" name="age" /><br /><br />' +
    '     <!-- DOB -->' +
    '           <label for="dob"><b>DOB: &nbsp;</b></label><input id="dob" name="dob" /><br /><br />' +
    '     <!-- DOT -->' +
    '           <label for="dot"><b>DOT: &nbsp;</b></label><input id="dot" name="dot" /><br /><br />' +
    '			<!-- Language -->' +
    '           <label for="language"><b>Native Language(s): &nbsp;</b></label>' +
    '            <input id="language" name="language" /><br /><br />' +
    '		<!-- Demographics  button -->' +
    '        <p align="center">' +
    '                <input type="button" class="demographics jspsych-btn"' +
    '                        id="demographicsButton" value="Next >"' +
    '                       onclick="welcome.click.demographics()">' +
    '       </p></div>';



// ----------------------- helper functions ------------------

welcome.helpers = {};
welcome.helpers.getRadioButton = function(name) { // get the value of a radio button
    var i, radios = document.getElementsByName(name);
    for (i = 0; i < radios.length; i = i + 1) {
        if (radios[i].checked) {
            return (radios[i].value);
        }
    }
    return ("NA");
}
welcome.helpers.setDisplay = function(theClass, theValue) { // toggle display status
    var i, classElements = document.getElementsByClassName(theClass);
    for (i = 0; i < classElements.length; i = i + 1) {
        classElements[i].style.display = theValue;
    }
}
welcome.helpers.setVisibility = function(theClass, theValue) { // toggle visibility
    var i, classElements = document.getElementsByClassName(theClass);
    for (i = 0; i < classElements.length; i = i + 1) {
        classElements[i].style.visibility = theValue;
    }
}
welcome.helpers.setHeader = function(theValue) { // alter the header
    document.getElementById("header").innerText = theValue;
}

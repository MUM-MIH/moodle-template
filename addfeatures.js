// directs the function to work once the page has loaded.
window.onload=function(){
//add material to our FoA category if you are a tutor, lect, non-primary lect, designer or admin
//check the role level. Tutor and above have access to the recycle bin link. So the material that follows will not display to students.
//Check the admin block. Check each link in the block.
	$(".block-region .type_course a").each(function(){
//Look for the text Recycle bin to check it's a tutor or above.
		if($(this).text().match(/Recycle bin/)){
			//link to how to's in the uni wide banner and nav drawer
					$( ".header-right" ).prepend('<div class="custom-menus my-auto"><a href="http://bit.ly/artshowtos" target="_blank" class="border border-dark rounded-circle text-dark p-2" role="button" title="Ed Tech how tos"><i class="fa fa-bolt fa-fw" aria-hidden="true"></i></a></div>');
	    				$( "#nav-drawer .list-group" ).prepend('<a class="list-group-item list-group-item-action" href="http://bit.ly/artshowtos" target="_blank" data-key="coursehome" data-isexpandable="0" data-indent="0" data-showdivider="0" data-type="60" data-nodetype="0" data-collapse="0" data-forceopen="0" data-isactive="0" data-hidden="0" data-preceedwithhr="0"><div class="ml-0"><div class="media"><span class="media-left"><i class="icon fa fa-bolt fa-fw " aria-hidden="true"></i></span><span class="media-body ">Ed Tech how tos</span></div></div></a>');
					$('.section_action_menu .editing_delete').css('display','none');
					$('#inst3407551 .action-menu-trigger').css('display','none');
					$('#inst3407542 .action-menu-trigger').css('display','none');
					$("#nav-drawer .list-group a").each(function(){
						if($(this).text().match(/Design Resources/)){

//make a variable of the Moodle section name
							var moodleSectionName = $('.sectionname').text();
//check the variable for the text Staff resources. Make sure the section you are on is the staff resources section.
							if(moodleSectionName.indexOf("Design Resources") > -1){
							if(window.location.href.indexOf('section-0') > -1 || window.location.href.indexOf('section=0') > -1) {	
//If you are on the staff resources section, remove the ability to hide/show the section to students. Ensuring it is not accidentally shown to students.
							//do nothing						      
							}
							else{
							$('.section-actions .editing_showhide').remove();
							} 
							}
//Search the left hand nav for the link to the Staff resources section, and make a variable out of that link.
							var SRSectionLink=$("nav .list-group-item:contains('Staff resources')").attr('href');
//Create a new button on the end of the nav labelled staff resources.
							$('.arts-banner-nav div').last().after('<div id="arts-staff-resources"><a href="https://lms.monash.edu/course/view.php?id=97270&amp;section=1"><i class="fa fa-user fa-fw" aria-hidden="true"></i> Design Resources</a></div>');
//Change the link of the new button to match the link of the section Staff resources resides in.
							$('#arts-staff-resources a').attr('href', SRSectionLink);
//Check the section the staff member is on is the overview section. If so, add the template instructions.
			/*var overviewSection=$("nav .list-group-item:contains('Overview')").attr('href');
			var currentSection=window.location.href;
			var callistaUnitCode = document.querySelector('.block_callista a')
			? document.querySelector('.block_callista a').innerText
			: null;
			if (overviewSection == currentSection && headerTitle.indexOf('Winter') > -1){
 				$('#templateInstructions').after('<div class="mt-3 p-2 border-mu-3 rounded mx-3 mb-2" id="staffInstructions"><h3 class="text-center"><i class="fa fa-fw fa-info-circle"></i> Welcome to your Moodle template</h3><p>These instructions are temporary and will disappear in O week. You cannot duplicate or edit this panel. The panel only appear to staff members, not students. Please click the button below to reveal further information on how to populate your Moodle site using this template.</p><div class="mt-3"><a class="btn btn-lg btn-secondary btn-block w-50 mb-2 mx-auto" data-toggle="collapse" href="#moodleTemplateInstructions" role="button" aria-expanded="false" aria-controls="collapseExample">Show/Hide Moodle template FAQs <i class="fa fa-fw fa-eye"></i></a></div><div class="collapse row w-100" id="moodleTemplateInstructions"><div class="col-lg"><h6 class="font-weight-bold">What is the Arts Moodle template?</h6><p>It is a Moodle site with pre-populated headings to support a clear and consistent organisation of content and learning activities.</p><h6 class="font-weight-bold">Why use a template?</h6><p>The template approach establishes a ‘road map’ for student learning. All learning materials and activities are signposted so that students can easily navigate through a logical learning pathway. The template provides a consistent experience for students across all their units in the Faculty.</p><h6 class="font-weight-bold">Can I see examples of a past unit using this template?</h6><p>Yes. The examples linked below contain links to useful instructional guides and educational research for you to consider in your unit design. We have provided two different ‘learning pathways’, or structures, to assist you in organising your material:</p><ul><li>For an example of a unit using a categories (flexible) structure, <a href="https://lms.monash.edu/course/view.php?id=89913&section=1" target="_blank" title="flexible design structure example">please see here</a> (opens in a new window). All UG units not using a template yet have been provided with this structure.</li><li>For an example of a unit using a pre/in/post-class (sequenced) structure for weeks/topics, <a href="https://lms.monash.edu/course/view.php?id=90111&section=1" target="_blank" title="sequenced design structure example">please see here</a> (opens in a new window). All LLCL and PG units are already using this structure.</li></ul><p>If you wish to change the structure you have been provided with, please edit the headings in your weeks/topics pages accordingly, or contact the Teaching Support or Educational Design teams (see below for links).</p><h6 class="font-weight-bold">How do I use the template?</h6><p>Import your content from a previous Moodle site, or build your Moodle site content from scratch. See these guides for further information (all links open in a new window):</p><ul><li><a href="https://sites.google.com/monash.edu/arts-teaching-and-learning-hq/digital-design/arts-moodle-template-guidelines" target="_blank" title="Checklist for the Arts Moodle Template">Checklist for using the Arts Moodle template</a></li><li><a href="https://lms.monash.edu/course/view.php?id=48399&section=11" target="_blank" title="Ed design how to\'s">Ed design how to\'s</a></li><li><a href="https://sites.google.com/monash.edu/arts-teaching-and-learning-hq" target="_blank" title="Arts T&L HQ">Arts T&L HQ site</a></li></ul><p><strong>Remember:</strong> clicking the lightning bolt icon <i class="fa fa-bolt p-2 border border-dark rounded-circle text-center" style="width:32px;"></i> in the white banner at the top right corner of your Moodle site will take you to our full suite of instructional guides.<h6 class="font-weight-bold">Who do I contact for support?</h6><p>the <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=arts-educational-design@monash.edu&su=Ed%20design%20support%20for%20my%20unit" target="_blank" title="email Ed Design team">Educational Design team</a> (opens in a new window) can advise you on how best to organise your material and structure your learning activities. Your local <a href="https://www.intranet.monash/arts/academic-governance-students/teaching-support/contact-us" target="_blank" title="Teaching Support contact list">Teaching Support Officer</a> (opens in a new window) can assist with your Moodle site set up.</p><h6 class="font-weight-bold">Why are these instructions appearing in my Moodle site?</h6><p>This instruction panel is temporary. <strong>It appears here to staff only</strong> via a script written by the Educational Design team and <strong>will be removed before students gain access to the site</strong>.</p></div></div></div>');
  			};*/	
//Close off IF statement relating to checking the role level of the staff member
  							};
						});
					};
//Close off function to check for the recycle bin link		
				});
//Close window.onload function	
	};

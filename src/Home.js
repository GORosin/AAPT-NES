import React from 'react';
import img from './cute-puppies-1084325_1280.jpg';
import img2 from './cute-3862219_1280.jpg';
import img3 from './pug-3567638_1280.jpg';
import {
	Badge, 
	UncontrolledCollapse, 
	Button,
	UncontrolledCarousel
} from 'reactstrap'; 

const items = [
  {
    src: img,
    altText: 'Slide 1',
	caption: '',
    key: '1'
  },
  {
    src: img2,
    altText: 'Slide 2',
	caption: '',
    key: '2'
  },
  {
    src: img3,
    altText: 'Slide 3',
	caption: '',
    key: '3'
  }
];

const Home = () => {
    return (
		<div>
		<UncontrolledCarousel className="carousel" items={items} />
		<div className="section">
			<h2>Welcome to the AAPT-NES</h2>
			<hr/>
			<p>The objective of the New England Section of the American Association of Physics 
			Teachers is the advancement and integration of the teaching of physics at all 
			educational levels and the furtherance of an appreciation for the role of physics 
			in our culture. Its membership consists of those interested in the teaching of 
			physics. NES-AAPT membership is not contingent upon membership in the 
			American Association of Physics Teachers (AAPT).</p>
			<p>Click <a href="/regional-meetings">here</a> for more information on local meetings.</p>
		</div>
		<div className="section">
			<h2 id="oct7"><Badge color="danger">Oct 7th</Badge> NES Fall Meeting <Button color="primary">Details</Button></h2>
		<UncontrolledCollapse toggler="#oct7">
			<hr/>
			<p>On behalf of the board of the AAPT-New England Section, we wish to announce the 2020 Fall Meeting to be held remotely (via Zoom) on Saturday, October 31, 2020.  10:00 am to 2:00 pm; workshop(s) from 2:00 pm to 3:00 pm</p>
			<p>The meeting theme is Improving Physics Instructional Lab Experiences.  We encourage participation from across the span from elementary and secondary education through first-year and beyond the first year (BFY) of college.  We invite all from early-career to experienced to retired, and especially recent or new-to-physics teachers to join us!</p>
			<p>Our keynote speaker is: Dr. Natasha Holmes, Cornell University Physics, and we welcome contributed talks.  There will be workshops, including  a PTRA session with information that can be used in a remote-classroom setting, held on Saturday afternoon. </p>
			<p>You can register for the meeting on <a href="/wild-apricot">Wild Apricot.</a></p>
			<p>If you would like to contribute a talk, <a href = "https://forms.gle/9jyMzMZtrvfoEk2RA">please use this form.</a></p>
			<p>Or paste this link to contribute: <a href="https://forms.gle/9jyMzMZtrvfoEk2RA">https://forms.gle/9jyMzMZtrvfoEk2RA</a></p>
			<b>2020 Fall Meeting – Tentative Program<br/>
			Saturday, October 31st<br/>
			10:00 am – 2:00 pm</b><br/>
			<ul>
			<li>Opening Remarks</li>
			<li>Keynote Speaker – Natasha Holmes (Cornell University): When Developing Conceptual Understanding Interferes with Teaching Authentic Physics</li>
			<li>Invited Talk: Lucas Walker (Weston High School): Expanding Learning in the Physics Lab via Integration of Computation. </li>
			<li>Invited Talk: Michael Briggs (University of New Hampshire): Comparison of Academically Homogeneous and Heterogeneous Groups.</li>
			<li>Contributed Talks:</li>
			<li>NES Fall Business Meeting</li>
			<li>Workshops (Separate Zoom meetings that follow the general meeting).</li>
			<ul>
			<li>Steve Henning (PTRA): Interactive Lecture Demonstrations in a Virtual Environment.</li>
			<ul>
			<li>This workshop will focus on using ILDs  that were developed by David Sokoloff and Ron Thornton.  David Sokoloff has provided the ILD text in pdf format and updated some of the ILDs for use virtually.  There will also be additional examples using PASCO and Vernier smart carts and software.</li>
			</ul>
			<li>Jay Wang (University of Massachusetts/Dartmouth) and Tim Atherton (Tufts University):  Computation and Modeling</li>
			<ul>
			<li>This workshop will focus on computation and modeling activities integrated into introductory and advanced physics courses appropriate for high school to college levels. The participants will be guided to work on concrete examples and will be encouraged to develop their own plans or activities. We will introduce common tools such as Jupyter notebook, excel, glowscript, and tracker, as well as useful resources such as PICUP and Physlets, some are particularly suitable for online delivery.</li>
			</ul>
			<li>Time: 2 hours, with an optional 3rd hour and follow-up meeting.</li>
			<li>Emily James (Brewster Academy) and Vivian O’Brian (STEP UP Ambassador for APS/AAPT): STEP UP:  Teaching Students about Career Potentials in Physics</li>
			<ul>
			<li>Did you know that physics is the only undergraduate science field with women represented at less than 50 %?  In fact, women make up only 20 % of recipients of bachelor’s degrees in physics.  The good news is that high school teachers can strongly influence women to pursue a degree in physics.  The STEP UP project has developed research-based lessons to engage women in this discipline and has created a nationwide community of teachers committed to increasing the representation of women in physics.  We will be presenting one of the lesson plans entitled “Careers in Physics” which may be successfully taught remotely, in person, or in a hybrid classroom situation.  These lessons will help your students assess their personal values in relation to a career in physics, examine profiles of professionals with a physics degree, and envision themselves in a physics career.  In addition, some of the student misconceptions surrounding the relevance of physics to other fields of study as well as its pivotal role in solving many societal problems such as climate change and curing cancer will be addressed.</li>
			</ul>
			</ul>
			</ul>
			</UncontrolledCollapse>
		</div>
		<div className="section">
			<h2 id="sep21"><Badge color="danger">Sep 21st</Badge> Fall 2020 Meeting of NES-AAPT<Button color="primary">Details</Button></h2>
			<UncontrolledCollapse toggler="#sep21">
			<hr/>
			<p>On behalf of the board of the AAPT-New England Section, we wish to announce the 2020 Fall Meeting to be held remotely (via Zoom) on Saturday, October 31, 2020. 10:00 am to 2:00 pm; workshop(s) from 2:00 pm to 3:00 pm</p>
			<p>The meeting theme is Improving Physics Instructional Lab Experiences. We encourage participation from across the span from elementary and secondary education through first-year and beyond the first year (BFY) of college. We invite all from early-career to experienced to retired, and especially recent or new-to-physics teachers to join us!</p>
			<p>Our keynote speaker is: Dr. Natasha Holmes, Cornell University Physics, and we welcome contributed talks. There will be workshops, including a PTRA session with information that can be used in a remote-classroom setting, held on Saturday afternoon.</p>
			<p>If you would like to contribute a talk, <a href = "https://forms.gle/9jyMzMZtrvfoEk2RA">please use this form.</a></p>
			<p>Or paste this link to contribute: https://forms.gle/9jyMzMZtrvfoEk2RA</p>
			</UncontrolledCollapse>
		</div>
		</div>
    );
}
 
export default Home;

<div class="banner">
  <br/>
  <div class="banner__title">Welcome to Level Up!</div>
  <div class="banner__text">Level Up is a program for career and professional development that provides personalized career opportunities you can have in EPAM,<br/>explains how to reach them and guides you on the way to your career goal and sharing your experience.</div>
  <div class="banner__links-cnt">
    <span class="banner__link"> <ac:link>
        <ri:page ri:content-title="Level Up overview"/>
        <ac:plain-text-link-body><![CDATA[ What is Level up and how it works?]]></ac:plain-text-link-body>
      </ac:link> </span> <span class="banner__link"> <ac:link>
        <ri:page ri:content-title="For all employees"/>
        <ac:plain-text-link-body><![CDATA[ What functionality is available on Level up portal?]]></ac:plain-text-link-body>
      </ac:link> </span>
  </div>
</div>
<div class="programs">
  <div class="programs__title">Why we do the program</div>
  <div class="program-cnt">
    <div class="program program--1">
      <div class="program__number">01</div>
      <div class="program__text">Provide EPAMers with dynamic career path with personally<br/>recommended detailed journeys</div>
      <ac:image ac:width="586">
        <ri:attachment ri:filename="Career path.png"/>
      </ac:image>
    </div>
    <div class="program program--2">
      <div class="program__number">02</div>
      <div class="program__text">Build an easy-to-use Portal for professional<br/>development, integrated with the people<br/>management suite</div>
      <ac:image ac:thumbnail="true" ac:width="235">
        <ri:attachment ri:filename="Block_2.png"/>
      </ac:image>
    </div>
    <div class="program program--3">
      <div class="program__number">03</div>
      <div class="program__text">Unify all the requirements from different<br/>sources into one single solution</div>
      <ac:image ac:width="336">
        <ri:attachment ri:filename="rounded.png"/>
      </ac:image>
    </div>
    <div class="program program--4">
      <div class="program__number">04</div>
      <div class="program__text">Engage EPAMers to share their professional development experience and<br/>promote constant development culture</div>
      <ac:image ac:height="175" ac:width="238">
        <ri:attachment ri:filename="step4.png"/>
      </ac:image>
    </div>
  </div>
</div>
<div class="roles">
  <div class="roles__wrapper">
    <div class="roles__title">
      <span>What is your role?</span>
    </div>
    <div class="roles-cnt">
      <div class="role">
        <ac:link>
          <ri:page ri:content-title="For all employees"/>
          <ac:plain-text-link-body><![CDATA[EPAMer]]></ac:plain-text-link-body>
        </ac:link>
      </div>
      <div class="role">
        <ac:link>
          <ri:page ri:content-title="For Managers &amp; Advisors"/>
          <ac:plain-text-link-body><![CDATA[Manager]]></ac:plain-text-link-body>
        </ac:link>
      </div>
      <div class="role">
        <ac:link>
          <ri:page ri:content-title="For Content authors"/>
          <ac:plain-text-link-body><![CDATA[Content author]]></ac:plain-text-link-body>
        </ac:link>
      </div>
    </div>
    <ac:image ac:width="561">
      <ri:attachment ri:filename="woman.png"/>
    </ac:image>
  </div>
</div>
<ac:structured-macro ac:macro-id="76bf9976-9c6b-4dac-82b2-3a00ad565866" ac:name="style" ac:schema-version="1">
  <ac:plain-text-body><![CDATA[/*@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,300,600,700,900);*/
#title-text, #likes-and-labels-container, #comments-section, .page-metadata{
	display: none;
}
#main-content{
	font-family:'Source Sans Pro', Helvetica, sans-serif;
}
#main #content{
	padding-right: 0;
}
#main {
    padding-left: 0;
    padding-right: 0;
    overflow: hidden;
}
div.banner {
	margin: 0 auto 40px auto;
	width: 1076px;
	text-align: center;
}

.banner__title {
	color: #1E2A66;
	font-size: 48px;
	font-weight: bold;
	letter-spacing: 0.27px;
	line-height: 60px;
	text-align: center;
	margin-bottom: 24px;
}

.banner__text {
	color: #7584B3;
	font-size: 18px;
	letter-spacing: 0;
	line-height: 24px;
	text-align: center;
	margin-bottom: 47px;
}

.banner__links-cnt{
	display: flex;
}

.banner__link {
	color: #495496 !important;
	font-size: 20px;
	font-weight: 600;
	letter-spacing: 0;
	line-height: 25px;
    text-align: left;
	text-transform: uppercase;
	text-decoration: none;
	border-radius: 50px;
	background-color: #F1F6FF;
	padding: 11px 23px;
	margin-right: 24px;
	width: 50%;
}
.banner__link:hover,.banner__link a:hover {
	color: #5671E1 !important;
	text-decoration: none;
}
.banner__link a{
	color: #495496 !important;
	display: flex;
	align-items: center;
}
.banner__link  .confluence-embedded-file-wrapper{
	background-color: #fff;
    border: 1px solid #D4E0FF;
    border-radius: 50%;
	margin-right: 17px;
	width: 56px;
	min-width: 56px;
    height: 56px;
	box-sizing:border-box;
	text-align:center;
	display: flex;
    align-items: center;
    justify-content: center;
}
.banner__link .confluence-embedded-file-wrapper img{
	display: inline-block !important;
} 
.programs__title {
	color: #1E2A66;
	font-size: 36px;
	font-weight: 600;
	letter-spacing: 0;
	line-height: 45px;
	margin-bottom: 30px;
}

.program__number {
	opacity: 0.49;
	color: #FFFFFF;
	font-size: 80px;
	font-weight: bold;
	letter-spacing: 0.44px;
	line-height: 101px;
}
.programs{
	width: 1076px;
	margin: 0 auto;
}
.program {
	box-sizing: border-box;
	border-radius: 6px;
	padding: 11px 23px;
	margin-bottom: 24px;
	position: relative;
	height: 339px;
}

.program > .confluence-embedded-file-wrapper{
	position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}

.program__text {
	color: #FFFFFF;
	font-size: 18px;
	font-weight: 600;
	letter-spacing: 0;
	line-height: 24px;
}

.program--1 {
	background: linear-gradient(139.58deg, #6289FE 0%, #85A3FF 100%);
	width: 615px;
	margin-right: 24px;
}

.program--1 .confluence-embedded-image{
	margin-left: 0 !important;
}

.program--2 {
	background: linear-gradient(139.58deg, #FF86B6 0%, #FD7D8B 98.81%);
	width: 431px;
}
.program--2 .confluence-embedded-file-wrapper, .program--4 .confluence-embedded-file-wrapper{
	text-align: center;
}
.program--2 .confluence-embedded-image, .program--4 .confluence-embedded-image{
	display: inline-block !important;
}

.program--3 {
	background: linear-gradient(139.58deg, #FFD840 0%, #FFD07B 100%);
	width: 432px;
	margin-right: 24px;
}

.program--3 .confluence-embedded-file-wrapper{
	left: 18px;
    bottom: 55px;
}

.program--4 {
	background: linear-gradient(139.58deg, #5DE399 0.57%, #70F8AE 100%);
	width: 618px;
}

.program--4 .confluence-embedded-file-wrapper{
    bottom: -5px;
}

.program--3, .program--4{
	 height: 339px;
}

.program-cnt {
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 24px;
}

.roles {
	background-color: #F0F6FF;
	padding: 65px 76px;
	position: relative;
	margin-bottom: -21px;
}

.roles__wrapper{
	position: relative;
    width: 1076px;
    margin: 0 auto;
}

.roles .confluence-embedded-file-wrapper{
	position: absolute;
    right: -13px;
    bottom: -131px;
}

.roles-cnt {
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	flex-wrap: wrap;
	width: 732px;
}

.roles__title {
	color: #1E2A66;
	font-size: 36px;
	font-weight: 600;
	letter-spacing: 0;
	line-height: 45px;
	margin-bottom: 57px;
	position: relative;
	min-height: 45px;
}

.roles__title>span{
	z-index: 1;
    position: absolute;
    top: 0;
}

.roles__title:after {
	content: "";
	position: absolute;
	top: 19px;
	left: 0;
	display: block;
	opacity: 0.4;
	background-color: #B8C6FF;
	width: 283px;
	height: 28px;
    z-index: 0;
}

.role {
	display: inline-block;
	font-size: 28px;
	font-weight: 600;
	letter-spacing: 0;
	line-height: 38px;
	text-decoration: none;
	border: 3px solid #B7C5FF;
	border-radius: 6px;
	background-color: #FFFFFF;
	padding: 11px;
	width: 275px;
	text-align: center;
}

.role a{
	color: #6F85DF !important;
}
.role:hover a{
	color: #5671E1;
	text-decoration: none;
}
.role:hover{
	border: 3px solid #5671E1;
}

.role:nth-of-type(n+1) {
	margin-right: 24px;
	margin-bottom: 24px;
}

@media (max-width: 1631px ){
	.role{
		width: 205px;
	}

	.roles{
		min-width: 1075px;
    	box-sizing: border-box;
	}
}]]></ac:plain-text-body>
</ac:structured-macro>
<p class="auto-cursor-target">
  <br/>
</p>

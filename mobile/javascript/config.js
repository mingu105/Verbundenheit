	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	
bookConfig.loadingCaption="Loading";
bookConfig.loadingCaptionColor="#DDDDDD";
bookConfig.loadingBackground="#1F2232";
bookConfig.appLogoOpenWindow="Blank";
bookConfig.logoHeight="40";
bookConfig.logoPadding="0";
bookConfig.logoTop="0";
bookConfig.toolbarColor="#444444";
bookConfig.iconColor="#FFFFFF";
bookConfig.pageNumColor="#000000";
bookConfig.iconFontColor="#FFFFFF";
bookConfig.InstructionsButtonVisible="Show";
bookConfig.QRCode="Hide";
bookConfig.HomeButtonVisible="Hide";
bookConfig.enablePageBack="Show";
bookConfig.ShareButtonVisible="Show";
shareObj = [];
bookConfig.EmailButtonVisible="Show";
bookConfig.btnShareWithEmailBody="\{link\}";
bookConfig.ThumbnailsButtonVisible="Show";
bookConfig.thumbnailColor="#333333";
bookConfig.thumbnailAlpha="70";
bookConfig.BookMarkButtonVisible="Show";
bookConfig.TableOfContentButtonVisible="Show";
bookConfig.bookmarkBackground="#000000";
bookConfig.bookmarkFontColor="#CCCCCC";
bookConfig.SearchButtonVisible="Show";
bookConfig.leastSearchChar="3";
bookConfig.PrintButtonVisible="No";
bookConfig.BackgroundSoundButtonVisible="Enable";
bookConfig.FlipSound="No";
bookConfig.BackgroundSoundLoop="-1";
bookConfig.AutoPlayButtonVisible="Yes";
bookConfig.autoPlayAutoStart="No";
bookConfig.autoPlayDuration="3";
bookConfig.autoPlayLoopCount="1";
bookConfig.ZoomButtonVisible="Yes";
bookConfig.minZoomWidth="403";
bookConfig.minZoomHeight="518";
bookConfig.mouseWheelFlip="Yes";
bookConfig.DownloadButtonVisible="Hide";
bookConfig.AnnotationButtonVisible="Disable";
bookConfig.FullscreenButtonVisible="Show";
bookConfig.bgBeginColor="#8EC9F4";
bookConfig.bgEndColor="#81C1F5";
bookConfig.bgMRotation="90";
bookConfig.backGroundImgURL="./files/mobile-ext/backGroundImgURL.jpg";
bookConfig.backgroundPosition="stretch";
bookConfig.backgroundOpacity="100";
bookConfig.LeftShadowWidth="90";
bookConfig.LeftShadowAlpha="0.4";
bookConfig.RightShadowWidth="55";
bookConfig.RightShadowAlpha="0.4";
bookConfig.ShowTopLeftShadow="Yes";
bookConfig.HardPageEnable="No";
bookConfig.hardCoverBorderWidth="8";
bookConfig.borderColor="#572F0D";
bookConfig.outerCoverBorder="Yes";
bookConfig.cornerRound="8";
bookConfig.leftMarginOnMobile="0";
bookConfig.topMarginOnMobile="0";
bookConfig.rightMarginOnMobile="0";
bookConfig.bottomMarginOnMobile="0";
bookConfig.pageBackgroundColor="#FFFFFF";
bookConfig.flipshortcutbutton="Show";
bookConfig.BindingType="side";
bookConfig.RightToLeft="No";
bookConfig.flippingTime="0.6";
bookConfig.retainBookCenter="Yes";
bookConfig.FlipStyle="Flip";
bookConfig.autoDoublePage="Yes";
bookConfig.thicknessWidthType="None";
bookConfig.thicknessColor="#FFFFFF";
bookConfig.topMargin="10";
bookConfig.bottomMargin="10";
bookConfig.leftMargin="10";
bookConfig.rightMargin="10";
bookConfig.maxWidthToSmallMode="400";
bookConfig.maxHeightToSmallMode="300";
bookConfig.LinkDownColor="#800080";
bookConfig.LinkAlpha="0.2";
bookConfig.OpenWindow="Blank";
bookConfig.showLinkHint="No";

bookConfig.macBookVersion = "BGbZqqJBUQjvJHcdlpAITepoMDSTjsOPbSloMOUWguMEfTprJPSVlrIOUcmmHLUUqgJMZUjqPHTVkkHLYZijHIdTivCAbakpJKdXhhGKQTplJKfcuiGBTRngALRQskONWTkrEDVXkkPGRfhqPOQaliHCQWno099A1510_";
bookConfig.Html5Template = "Metro";
bookConfig.UIBaseURL="mobile/";
bookConfig.isFlipPdf=false;
bookConfig.searchTextJS="mobile/javascript/search_config.js";
bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";
bookConfig.totalPageCount=92;
bookConfig.largePageWidth=680;
bookConfig.largePageHeight=850;
bookConfig.bookTitle="KIT2025 Melanie Loureiro";
bookConfig.normalPath="./files/mobile/";
bookConfig.largePath="./files/mobile/";
bookConfig.productName="Flip PDF";
bookConfig.useTheAliCloudChart=false;
bookConfig.MidBgColor="#e6d517";
bookConfig.bookmarkCR = "65b144332bba57ffe6b22a1a98267216836ad595";
;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};
bookConfig.thumbPath="./files/thumb/";
var fliphtml5_pages=[{"l":"./files/mobile/1.jpg","n":"./files/mobile/1.jpg","t":"./files/thumb/1.jpg"},{"l":"./files/mobile/2.jpg","n":"./files/mobile/2.jpg","t":"./files/thumb/2.jpg"},{"l":"./files/mobile/3.jpg","n":"./files/mobile/3.jpg","t":"./files/thumb/3.jpg"},{"l":"./files/mobile/4.jpg","n":"./files/mobile/4.jpg","t":"./files/thumb/4.jpg"},{"l":"./files/mobile/5.jpg","n":"./files/mobile/5.jpg","t":"./files/thumb/5.jpg"},{"l":"./files/mobile/6.jpg","n":"./files/mobile/6.jpg","t":"./files/thumb/6.jpg"},{"l":"./files/mobile/7.jpg","n":"./files/mobile/7.jpg","t":"./files/thumb/7.jpg"},{"l":"./files/mobile/8.jpg","n":"./files/mobile/8.jpg","t":"./files/thumb/8.jpg"},{"l":"./files/mobile/9.jpg","n":"./files/mobile/9.jpg","t":"./files/thumb/9.jpg"},{"l":"./files/mobile/10.jpg","n":"./files/mobile/10.jpg","t":"./files/thumb/10.jpg"},{"l":"./files/mobile/11.jpg","n":"./files/mobile/11.jpg","t":"./files/thumb/11.jpg"},{"l":"./files/mobile/12.jpg","n":"./files/mobile/12.jpg","t":"./files/thumb/12.jpg"},{"l":"./files/mobile/13.jpg","n":"./files/mobile/13.jpg","t":"./files/thumb/13.jpg"},{"l":"./files/mobile/14.jpg","n":"./files/mobile/14.jpg","t":"./files/thumb/14.jpg"},{"l":"./files/mobile/15.jpg","n":"./files/mobile/15.jpg","t":"./files/thumb/15.jpg"},{"l":"./files/mobile/16.jpg","n":"./files/mobile/16.jpg","t":"./files/thumb/16.jpg"},{"l":"./files/mobile/17.jpg","n":"./files/mobile/17.jpg","t":"./files/thumb/17.jpg"},{"l":"./files/mobile/18.jpg","n":"./files/mobile/18.jpg","t":"./files/thumb/18.jpg"},{"l":"./files/mobile/19.jpg","n":"./files/mobile/19.jpg","t":"./files/thumb/19.jpg"},{"l":"./files/mobile/20.jpg","n":"./files/mobile/20.jpg","t":"./files/thumb/20.jpg"},{"l":"./files/mobile/21.jpg","n":"./files/mobile/21.jpg","t":"./files/thumb/21.jpg"},{"l":"./files/mobile/22.jpg","n":"./files/mobile/22.jpg","t":"./files/thumb/22.jpg"},{"l":"./files/mobile/23.jpg","n":"./files/mobile/23.jpg","t":"./files/thumb/23.jpg"},{"l":"./files/mobile/24.jpg","n":"./files/mobile/24.jpg","t":"./files/thumb/24.jpg"},{"l":"./files/mobile/25.jpg","n":"./files/mobile/25.jpg","t":"./files/thumb/25.jpg"},{"l":"./files/mobile/26.jpg","n":"./files/mobile/26.jpg","t":"./files/thumb/26.jpg"},{"l":"./files/mobile/27.jpg","n":"./files/mobile/27.jpg","t":"./files/thumb/27.jpg"},{"l":"./files/mobile/28.jpg","n":"./files/mobile/28.jpg","t":"./files/thumb/28.jpg"},{"l":"./files/mobile/29.jpg","n":"./files/mobile/29.jpg","t":"./files/thumb/29.jpg"},{"l":"./files/mobile/30.jpg","n":"./files/mobile/30.jpg","t":"./files/thumb/30.jpg"},{"l":"./files/mobile/31.jpg","n":"./files/mobile/31.jpg","t":"./files/thumb/31.jpg"},{"l":"./files/mobile/32.jpg","n":"./files/mobile/32.jpg","t":"./files/thumb/32.jpg"},{"l":"./files/mobile/33.jpg","n":"./files/mobile/33.jpg","t":"./files/thumb/33.jpg"},{"l":"./files/mobile/34.jpg","n":"./files/mobile/34.jpg","t":"./files/thumb/34.jpg"},{"l":"./files/mobile/35.jpg","n":"./files/mobile/35.jpg","t":"./files/thumb/35.jpg"},{"l":"./files/mobile/36.jpg","n":"./files/mobile/36.jpg","t":"./files/thumb/36.jpg"},{"l":"./files/mobile/37.jpg","n":"./files/mobile/37.jpg","t":"./files/thumb/37.jpg"},{"l":"./files/mobile/38.jpg","n":"./files/mobile/38.jpg","t":"./files/thumb/38.jpg"},{"l":"./files/mobile/39.jpg","n":"./files/mobile/39.jpg","t":"./files/thumb/39.jpg"},{"l":"./files/mobile/40.jpg","n":"./files/mobile/40.jpg","t":"./files/thumb/40.jpg"},{"l":"./files/mobile/41.jpg","n":"./files/mobile/41.jpg","t":"./files/thumb/41.jpg"},{"l":"./files/mobile/42.jpg","n":"./files/mobile/42.jpg","t":"./files/thumb/42.jpg"},{"l":"./files/mobile/43.jpg","n":"./files/mobile/43.jpg","t":"./files/thumb/43.jpg"},{"l":"./files/mobile/44.jpg","n":"./files/mobile/44.jpg","t":"./files/thumb/44.jpg"},{"l":"./files/mobile/45.jpg","n":"./files/mobile/45.jpg","t":"./files/thumb/45.jpg"},{"l":"./files/mobile/46.jpg","n":"./files/mobile/46.jpg","t":"./files/thumb/46.jpg"},{"l":"./files/mobile/47.jpg","n":"./files/mobile/47.jpg","t":"./files/thumb/47.jpg"},{"l":"./files/mobile/48.jpg","n":"./files/mobile/48.jpg","t":"./files/thumb/48.jpg"},{"l":"./files/mobile/49.jpg","n":"./files/mobile/49.jpg","t":"./files/thumb/49.jpg"},{"l":"./files/mobile/50.jpg","n":"./files/mobile/50.jpg","t":"./files/thumb/50.jpg"},{"l":"./files/mobile/51.jpg","n":"./files/mobile/51.jpg","t":"./files/thumb/51.jpg"},{"l":"./files/mobile/52.jpg","n":"./files/mobile/52.jpg","t":"./files/thumb/52.jpg"},{"l":"./files/mobile/53.jpg","n":"./files/mobile/53.jpg","t":"./files/thumb/53.jpg"},{"l":"./files/mobile/54.jpg","n":"./files/mobile/54.jpg","t":"./files/thumb/54.jpg"},{"l":"./files/mobile/55.jpg","n":"./files/mobile/55.jpg","t":"./files/thumb/55.jpg"},{"l":"./files/mobile/56.jpg","n":"./files/mobile/56.jpg","t":"./files/thumb/56.jpg"},{"l":"./files/mobile/57.jpg","n":"./files/mobile/57.jpg","t":"./files/thumb/57.jpg"},{"l":"./files/mobile/58.jpg","n":"./files/mobile/58.jpg","t":"./files/thumb/58.jpg"},{"l":"./files/mobile/59.jpg","n":"./files/mobile/59.jpg","t":"./files/thumb/59.jpg"},{"l":"./files/mobile/60.jpg","n":"./files/mobile/60.jpg","t":"./files/thumb/60.jpg"},{"l":"./files/mobile/61.jpg","n":"./files/mobile/61.jpg","t":"./files/thumb/61.jpg"},{"l":"./files/mobile/62.jpg","n":"./files/mobile/62.jpg","t":"./files/thumb/62.jpg"},{"l":"./files/mobile/63.jpg","n":"./files/mobile/63.jpg","t":"./files/thumb/63.jpg"},{"l":"./files/mobile/64.jpg","n":"./files/mobile/64.jpg","t":"./files/thumb/64.jpg"},{"l":"./files/mobile/65.jpg","n":"./files/mobile/65.jpg","t":"./files/thumb/65.jpg"},{"l":"./files/mobile/66.jpg","n":"./files/mobile/66.jpg","t":"./files/thumb/66.jpg"},{"l":"./files/mobile/67.jpg","n":"./files/mobile/67.jpg","t":"./files/thumb/67.jpg"},{"l":"./files/mobile/68.jpg","n":"./files/mobile/68.jpg","t":"./files/thumb/68.jpg"},{"l":"./files/mobile/69.jpg","n":"./files/mobile/69.jpg","t":"./files/thumb/69.jpg"},{"l":"./files/mobile/70.jpg","n":"./files/mobile/70.jpg","t":"./files/thumb/70.jpg"},{"l":"./files/mobile/71.jpg","n":"./files/mobile/71.jpg","t":"./files/thumb/71.jpg"},{"l":"./files/mobile/72.jpg","n":"./files/mobile/72.jpg","t":"./files/thumb/72.jpg"},{"l":"./files/mobile/73.jpg","n":"./files/mobile/73.jpg","t":"./files/thumb/73.jpg"},{"l":"./files/mobile/74.jpg","n":"./files/mobile/74.jpg","t":"./files/thumb/74.jpg"},{"l":"./files/mobile/75.jpg","n":"./files/mobile/75.jpg","t":"./files/thumb/75.jpg"},{"l":"./files/mobile/76.jpg","n":"./files/mobile/76.jpg","t":"./files/thumb/76.jpg"},{"l":"./files/mobile/77.jpg","n":"./files/mobile/77.jpg","t":"./files/thumb/77.jpg"},{"l":"./files/mobile/78.jpg","n":"./files/mobile/78.jpg","t":"./files/thumb/78.jpg"},{"l":"./files/mobile/79.jpg","n":"./files/mobile/79.jpg","t":"./files/thumb/79.jpg"},{"l":"./files/mobile/80.jpg","n":"./files/mobile/80.jpg","t":"./files/thumb/80.jpg"},{"l":"./files/mobile/81.jpg","n":"./files/mobile/81.jpg","t":"./files/thumb/81.jpg"},{"l":"./files/mobile/82.jpg","n":"./files/mobile/82.jpg","t":"./files/thumb/82.jpg"},{"l":"./files/mobile/83.jpg","n":"./files/mobile/83.jpg","t":"./files/thumb/83.jpg"},{"l":"./files/mobile/84.jpg","n":"./files/mobile/84.jpg","t":"./files/thumb/84.jpg"},{"l":"./files/mobile/85.jpg","n":"./files/mobile/85.jpg","t":"./files/thumb/85.jpg"},{"l":"./files/mobile/86.jpg","n":"./files/mobile/86.jpg","t":"./files/thumb/86.jpg"},{"l":"./files/mobile/87.jpg","n":"./files/mobile/87.jpg","t":"./files/thumb/87.jpg"},{"l":"./files/mobile/88.jpg","n":"./files/mobile/88.jpg","t":"./files/thumb/88.jpg"},{"l":"./files/mobile/89.jpg","n":"./files/mobile/89.jpg","t":"./files/thumb/89.jpg"},{"l":"./files/mobile/90.jpg","n":"./files/mobile/90.jpg","t":"./files/thumb/90.jpg"},{"l":"./files/mobile/91.jpg","n":"./files/mobile/91.jpg","t":"./files/thumb/91.jpg"},{"l":"./files/mobile/92.jpg","n":"./files/mobile/92.jpg","t":"./files/thumb/92.jpg"}];
var language=[{"language" : "English","btnFirstPage" : "First","btnNextPage" : "Next Page","btnLastPage" : "Last","btnPrePage" : "Previous Page","btnGoToHome" : "Return Home","btnDownload" : "Download","btnSoundOn" : "Sound On","btnSoundOff" : "Sound Off","btnPrint" : "Print","btnThumb" : "Thumbnails","btnBookMark" : "Table of content","frmBookMark" : "Bookmark","btnZoomIn" : "Zoom In","btnZoomOut" : "Zoom Out","btnAutoFlip" : "Auto Flip","btnStopAutoFlip" : "Stop Auto Flip","btnSocialShare" : "Social Share","btnHelp" : "Help","btnAbout" : "About","btnSearch" : "Search","btnFullscreen" : "Fullscreen","btnExitFullscreen" : "Exit Fullscreen","btnMore" : "More","frmPrintCaption" : "Print","frmPrintall" : "Print All Pages","frmPrintcurrent" : "Print Current Page","frmPrintRange" : "Print Range","frmPrintexample" : "Example: 2,3,5-10","frmPrintbtn" : "Print","frmShareCaption" : "Share","frmShareLabel" : "Share","frmShareInfo" : "You can easily share this publication to social networks.Just click the appropriate button below","frminsertLabel" : "Insert to Site","frminsertInfo" : "Use the code below to embed this publication to your website.","frmaboutcaption" : "Contact","frmaboutcontactinformation" : "Contact Information","frmaboutADDRESS" : "Address","frmaboutEMAIL" : "Email","frmaboutWEBSITE" : "Website","frmaboutMOBILE" : "Mobile","frmaboutAUTHOR" : "Author","frmaboutDESCRIPTION" : "Description","frmSearch" : "Search","frmToc" : "Table Of Contents","btnTableOfContent" : "Table Of Contents","btnNote" : "Annotation","lblLast" : "This is the last page.","lblFirst" : "This is the first page.","lblFullscreen" : "Click to view in fullscreen","lblName" : "Name","lblPassword" : "Password","lblLogin" : "Login","lblCancel" : "Cancel","lblNoName" : "User name can not be empty.","lblNoPassword" : "Password can not be empty.","lblNoCorrectLogin" : "Please enter the correct user name and password.","btnVideo" : "Video Gallery","btnSlideShow" : "Slide Show","pnlSearchInputInvalid" : "The search text is too short.","btnDragToMove" : "Move by mouse drag","btnPositionToMove" : "Move by mouse position","lblHelp1" : "Drag the page corner to view","lblHelp2" : "Double click to zoom in, out","lblCopy" : "Copy","lblAddToPage" : "add to page","lblPage" : "Page","lblTitle" : "Title","lblEdit" : "Edit","lblDelete" : "Delete","lblRemoveAll" : "Remove All","tltCursor" : "cursor","tltAddHighlight" : "add highlight","tltAddTexts" : "add texts","tltAddShapes" : "add shapes","tltAddNotes" : "add notes","tltAddImageFile" : "add image file","tltAddSignature" : "add signature","tltAddLine" : "add line","tltAddArrow" : "add arrow","tltAddRect" : "add rect","tltAddEllipse" : "add ellipse","lblDoubleClickToZoomIn" : "Double click to zoom in.","lblPages" : "Pages:","infCopyToClipboard" : "Your browser dose not support clipboard, please do it yourself.","lblDescription" : "Title","frmLinkLabel" : "Link","infNotSupportHtml5" : "Your browser does not support HTML5.","frmHowToUse" : "How To Use","lblHelpPage1" : "Move your finger to flip the book page.","lblHelpPage2" : "Zoom in by using gesture or double click on the page.","lblHelpPage3" : "Click to view the table of content, bookmarks and share your books via social networks.","lblHelpPage4" : "Add bookmarks, use search function and auto flip the book.","lblHelpPage5" : "Open the thumbnails to overview all book pages.","frmQrcodeCaption" : "Scan the bottom two-dimensional code to view with mobile phone.","btnClearSearch" : "Clear","frmSearchPrompt" : "Clear","btnHome" : "Home","btnFullScreen" : "Enable FullScreen","btnDisableFullScreen" : "Disable FullScreen","btnShareEmail" : "Share","frmHelpCaption" : "Help","frmHelpTip1" : "Double click to zoom in or out","frmHelpTip2" : "Drag the page corner to view","frmPrintBtnCaption" : "Print","frmPrintPrintAll" : "Print All Pages","frmPrintPrintCurrentPage" : "Print Current Page","frmPrintPrintRange" : "Print Range","frmPrintExampleCaption" : "Example: 2,5,8-26","frmPrintPreparePage" : "Preparing Page:","frmPrintPrintFailed" : "Print Failed:","loginCaption" : "Login","loginInvalidPassword" : "Not a valid password!","loginPasswordLabel" : "Password:","loginBtnLogin" : "Login","loginBtnCancel" : "Cancel","lblPagesFound" : "Pages:","lblPageIndex" : "Page","frnAboutCaption" : "About & Contact","btnSinglePage" : "Single Page","btnDoublePage" : "Double Page","btnSwicthLanguage" : "Switch Language","tipChangeLanguage" : "Please select a language below...","btnMoreOptionsLeft" : "More Options","btnMoreOptionsRight" : "More Options","btnFit" : "Fit Window","smallModeCaption" : "Click to view in fullscreen","btnAddAnnotation" : "Add Annotations","btnAnnotation" : "Annotations","FlipPageEditor_SaveAndExit" : "Save and Exit","FlipPageEditor_Exit" : "Exit","DrawToolWindow_Redo" : "Redo","DrawToolWindow_Undo" : "Undo","DrawToolWindow_Clear" : "Clear","DrawToolWindow_Brush" : "Brush","DrawToolWindow_Width" : "Width","DrawToolWindow_Alpha" : "Alpha","DrawToolWindow_Color" : "Color","DrawToolWindow_Eraser" : "Eraser","DrawToolWindow_Rectangular" : "Rectangular","DrawToolWindow_Ellipse" : "Ellipse","TStuff_BorderWidth" : "Border Width","TStuff_BorderAlph" : "Border Alpha","TStuff_BorderColor" : "Border Color","DrawToolWindow_TextNote" : "Text Note","AnnotMark" : "Book Mark","lastpagebtnHelp" : "Last page","firstpagebtnHelp" : "First page","homebtnHelp" : "Return to home page","aboubtnHelp" : "About","screenbtnHelp" : "Open this application in full-screen mode","helpbtnHelp" : "Show help","searchbtnHelp" : "Search from pages","pagesbtnHelp" : "Take a look at the thumbnail of this brochure","bookmarkbtnHelp" : "Open Bookmark","AnnotmarkbtnHelp" : "Open Table of content","printbtnHelp" : "Print the brochure","soundbtnHelp" : "Turn on or off the sound","sharebtnHelp" : "Send Email to","socialSharebtnHelp" : "Social Share","zoominbtnHelp" : "Zoom in","downloadbtnHelp" : "Downdlaod this brochure","pagemodlebtnHelp" : "Switch Single and double page mode","languagebtnHelp" : "Switch Lauguage","annotationbtnHelp" : "Add Annotation","addbookmarkbtnHelp" : "Add Bookmark","removebookmarkbtnHelp" : "Remove Bookmark","updatebookmarkbtnHelp" : "Update Bookmark","btnShoppingCart" : "Shopping Cart","Help_ShoppingCartbtn" : "Shopping Cart","Help_btnNextPage" : "Next page","Help_btnPrePage" : "Previous page","Help_btnAutoFlip" : "Auto filp","Help_StopAutoFlip" : "Stop atuo filp","btnaddbookmark" : "Add","btndeletebookmark" : "Delete","btnupdatebookmark" : "Update","frmyourbookmarks" : "Your bookmarks","frmitems" : "items","DownloadFullPublication" : "Full Publication","DownloadCurrentPage" : "Current Page","DownloadAttachedFiles" : "Attached Files","lblLink" : "Link","btnCopy" : "Copy Button","restorePage" : "Would you like to restore previous session","tmpl_Backgoundsoundon" : "Background Sound On","tmpl_Backgoundsoundoff" : "Background Sound Off","tmpl_Flipsoundon" : "Flip Sound On","tmpl_Flipsoundoff" : "Flip Sound Off","Help_PageIndex" : "The current page number","tmpl_PrintPageRanges" : "PAGE RANGES","tmpl_PrintPreview" : "PREVIEW","btnSelection" : "Select Text","loginNameLabel" : "Name:","btnGotoPage" : "	Go","btnSettings" : "Setting","soundSettingTitle" : "Sound Setting","closeFlipSound" : "Close Flip Sound","closeBackgroundSound" : "Close Backgorund Sound","frmShareLinkLabel" : "Link:","frmShareBtnCopy" : "Copy","frmShareItemsGroupCaption" : "Social Share","frmPanelTitle" : "Share it","frmShareQRcode" : "QRCode","TAnnoActionPropertyStuff_GotoPage" : "Go to page","btnPageBack" : "Backward","btnPageForward" : "Forward","SelectTextCopy" : "Copy Selected Text","selectCopyButton" : "Copy","TStuffCart_TypeCart" : "Shopping Cart","TStuffCart_DetailedQuantity" : "Quantity","TStuffCart_DetailedPrice" : "Price","ShappingCart_Close" : "Close","ShappingCart_CheckOut" : "Checkout","ShappingCart_Item" : "Item","ShappingCart_Total" : "Total","ShappingCart_AddCart" : "Add to cart","ShappingCart_InStock" : "In Stock","TStuffCart_DetailedCost" : "Shipping cost","TStuffCart_DetailedTime" : "Delivery time","TStuffCart_DetailedDay" : "day(s)","ShappingCart_NotStock" : "Not enough in stock","btnCrop" : "Crop","btnDragButton" : "Drag","btnFlipBook" : "Flip Book","btnSlideMode" : "Slide Mode","btnSinglePageMode" : "Single Page Mode","btnVertical" : "Vertical Mode","btnHotizontal" : "Horizontal Mode","btnClose" : "Close","btnBookStatus" : "Book View","checkBoxInsert" : "Insert Current Page","btnQRCode" : "Click to scan QR code","btnRotateLeft" : "Rotate Left","btnRotateRight" : "Rotate Right","lblSelectMode" : "Select view mode please.","frmDownloadPreview" : "Preview","frmDownload" : "Download","TTActionQuiz_PlayAgain" : "Do you wanna play it again","TTActionQuiz_Ration" : "Your ratio is","frmTelephone" : "Telephone list","btnDialing" : "Dialing","lblSelectMessage" : "Please copy the the text content in the text box","btnSelectText" : "Select Text","btnPhoneNumber" : "Telephone","btnWeCharShare" : "WeChat Share","btnMagnifierIn" : "Magnifying Glass","btnMagnifierOut" : "Magnifier Reduction","frmShareSmallProgram" : "smallProgram","btnMagnifier" : "Magnifier","frmPrintPrintLimitFailed" : "Sorry, you can't print the pages.","btnReport" : "Report","btnDoubleSinglePage" : "Page switch","btnDownloadPosterPrompt" : "Click to download the poster","infLongPressToSavePoster" : "Press and hold the mobile terminal to save the poster","infLongPressToIndentify" : "Long press to identify QR code","infScanCodeToView" : "Scan code to read","infDeleteNote" : "Do you want to delete the note?","proFullScreenWarn" : "Current browser does not support full-screen,Please use Chrome for best results","btnBack" : "Backs","frmVideoListTitle" : "Video list","frmVideoTitle" : "Video","lblConfirm" : "Confirm"},{"language" : "German","btnFirstPage" : "Erste Seite","btnNextPage" : "Nächste Seite","btnLastPage" : "Letzte Seite","btnPrePage" : "Vorige Seite","btnGoToHome" : "Zurück zur Startseite","btnDownload" : "herunterladen","btnSoundOn" : "Sound anschalten","btnSoundOff" : "Sound abschalten","btnPrint" : "drucken","btnThumb" : "Thumbnail","btnBookMark" : "Inhaltsverzeichnis","frmBookMark" : "Lesezeichen","btnZoomIn" : "vergrößern","btnZoomOut" : "verkleinern","btnAutoFlip" : "Autoflip","btnStopAutoFlip" : "Autoflip stoppen","btnSocialShare" : "Soziale Netzwerke","btnHelp" : "Hilfe","btnAbout" : "Über","btnSearch" : "suchen","btnFullscreen" : "Vollbild","btnExitFullscreen" : "Bildschirmfüllende Darstellung beenden","btnMore" : "mehr","frmPrintCaption" : "Druckfenster","frmPrintall" : "Alle Seiten drucken","frmPrintcurrent" : "Aktuelle Seite drucken","frmPrintRange" : "Druckbereich","frmPrintexample" : "Beispiel: 2,3,5-10","frmPrintbtn" : "drucken","frmShareCaption" : "teilen","frmShareLabel" : "teilen","frmShareInfo" : "Teilen Sie die Publikation in sozialen Netzwerken einfach. Klicken Sie auf folgenden Button.","frminsertLabel" : "In Seite einbinden","frminsertInfo" : "Verwenden Sie den folgenden Code, um die Publikation in Webseite einzubinden.","frmaboutcaption" : "Kontakt","frmaboutcontactinformation" : "Kontakt-Informationen","frmaboutADDRESS" : "Adresse","frmaboutEMAIL" : "e-mail","frmaboutWEBSITE" : "Website","frmaboutMOBILE" : "Mobile","frmaboutAUTHOR" : "Tutor","frmaboutDESCRIPTION" : "Beschreibung","frmSearch" : "Suche","frmToc" : "Inhaltsverzeichnis","btnTableOfContent" : "Inhaltsverzeichnis anzeigen","btnNote" : "Annotation","lblLast" : "Letzte Seite","lblFirst" : "Erste Seite","lblFullscreen" : "Vollbildmodus","lblName" : "Name","lblPassword" : "Passwort","lblLogin" : "einloggen","lblCancel" : "abbrechen","lblNoName" : "Benutzername darf nicht leer sein.","lblNoPassword" : "Passwort darf nicht leer sein.","lblNoCorrectLogin" : "Bitte geben Sie richtigen Benutzernamen und das Passwort ein.","btnVideo" : "Video-Galerie","btnSlideShow" : "Diashow","pnlSearchInputInvalid" : "Der Suchtext ist zu kurz.","btnDragToMove" : "Zoom per Mausrad","btnPositionToMove" : "Navigieren mit der Maus","lblHelp1" : "Die Ecke der Seite ziehen","lblHelp2" : "Zoomen per Doppelklick","lblCopy" : "kopieren","lblAddToPage" : "Zur Seite hinzufügen","lblPage" : "Seite","lblTitle" : "Titel","lblEdit" : "bearbeiten","lblDelete" : "löschen","lblRemoveAll" : "Alles entfernen","tltCursor" : "Cursor","tltAddHighlight" : "Highlight hinzufügen","tltAddTexts" : "Text hinzufügen","tltAddShapes" : "Form hinzufügen","tltAddNotes" : "Notizen hinzufügen","tltAddImageFile" : "Bild hinzufügen","tltAddSignature" : "Signatur hinzufügen","tltAddLine" : "Linie hinzufügen","tltAddArrow" : "Pfeil hinzufügen","tltAddRect" : "Rechteck hinzufügen","tltAddEllipse" : "Ellipse hinzufügen ","lblDoubleClickToZoomIn" : "Zoomen per Doppelklick.","lblPages" : "Seitenzahl","infCopyToClipboard" : "Ihr Browser unterstützt die Zwischenablage nicht","lblDescription" : "Titel","frmLinkLabel" : "Link","infNotSupportHtml5" : "Ihr Browser unterstützt kein HTML5.","frmHowToUse" : "Nutzungsanleitung","lblHelpPage1" : "Bewegen Sie Ihren Finger, um die Buchseite umzublättern.","lblHelpPage2" : "Vergrößern Sie mit der Geste oder doppelklicken Sie auf die Seite.","lblHelpPage3" : "Klicken Sie hier, um das Inhaltsverzeichnis und die Lesezeichen anzuzeigen und Ihre Bücher über soziale Netzwerke zu teilen.","lblHelpPage4" : "Fügen Sie Lesezeichen hinzu, verwenden Sie die Suchfunktion und drehen Sie das Buch automatisch.","lblHelpPage5" : "Öffnen Sie die Miniaturansichten, um alle Buchseiten anzuzeigen.","frmQrcodeCaption" : "Scannen Sie den unteren zweidimensionalen Code, um mit dem Handy zu sehen.","btnClearSearch" : "löschen","frmSearchPrompt" : "Leeren","btnHome" : "Startseite","btnFullScreen" : "Vollbildmodus aktivieren","btnDisableFullScreen" : "Vollbildmodus deaktivieren","btnShareEmail" : "teilen","frmHelpCaption" : "Hilfe","frmHelpTip1" : "Zoom per Doppelklick","frmHelpTip2" : "Sie können per Drag von Seite zu Seite blättern.","frmPrintBtnCaption" : "drucken","frmPrintPrintAll" : "Alle Seiten drucken","frmPrintPrintCurrentPage" : "Aktuelle Seite drucken","frmPrintPrintRange" : "Druckbereich","frmPrintExampleCaption" : "Beispiel: 2,5,8-26","frmPrintPreparePage" : "Seite wird vorbereitet","frmPrintPrintFailed" : "Fehler beim Drucken","loginCaption" : "Passwort","loginInvalidPassword" : "Falsches Passwort!","loginPasswordLabel" : "Passwort:","loginBtnLogin" : "einloggen","loginBtnCancel" : "abbrechen","lblPagesFound" : "die gesuchte Seite","lblPageIndex" : "Seiten","frnAboutCaption" : "Über uns","btnSinglePage" : "Einzelseite","btnDoublePage" : "Doppelseite","btnSwicthLanguage" : "Sprache ändern","tipChangeLanguage" : "Eine Sprache auswählen","btnMoreOptionsLeft" : "Weitere Optionen","btnMoreOptionsRight" : "Weitere Optionen","btnFit" : "automatisch anpassen","smallModeCaption" : "Im Vollbildmodus","btnAddAnnotation" : "Anmerkung hinzufügen","btnAnnotation" : "Anmerkungliste","FlipPageEditor_SaveAndExit" : "speichern und beenden","FlipPageEditor_Exit" : "beenden","DrawToolWindow_Redo" : "wiederherstellen","DrawToolWindow_Undo" : "rückgängig","DrawToolWindow_Clear" : "löschen","DrawToolWindow_Brush" : "Pinsel","DrawToolWindow_Width" : "Pinselbreite","DrawToolWindow_Alpha" : "Pinseltransparenz","DrawToolWindow_Color" : "Pinselfarbe","DrawToolWindow_Eraser" : "Radiergummi","DrawToolWindow_Rectangular" : "Rechteck","DrawToolWindow_Ellipse" : "Ellipse","TStuff_BorderWidth" : "Randbreite","TStuff_BorderAlph" : "Randtransparenz","TStuff_BorderColor" : "Textfarbe","DrawToolWindow_TextNote" : "Textanmerkung","AnnotMark" : "Lesezeichen","lastpagebtnHelp" : "Letzte Seite","firstpagebtnHelp" : "Erste Seite","homebtnHelp" : "Zurück zur Startseite","aboubtnHelp" : "Über","screenbtnHelp" : "Programm im Vollbildmodus starten","helpbtnHelp" : "Hilfefenster öffnen","searchbtnHelp" : "Suchen innerhalb einer Seite","pagesbtnHelp" : "Thumbnail der Broschüre anschauen","bookmarkbtnHelp" : "Lesezeichen öffnen","AnnotmarkbtnHelp" : "Inhaltsverzeichnis öffnen","printbtnHelp" : "Broschüre drucken","soundbtnHelp" : "Sound anschalten oder abschalten","sharebtnHelp" : "mailen","socialSharebtnHelp" : "teilen","zoominbtnHelp" : "zoomen","downloadbtnHelp" : "Broschüre herunterladen","pagemodlebtnHelp" : "Einzel- und Doppelseite","languagebtnHelp" : "Sprache wechseln","annotationbtnHelp" : "Anmerkung hinzufügen","addbookmarkbtnHelp" : "Lesezeichen hinzufügen","removebookmarkbtnHelp" : "Lesezeichen entfernen","updatebookmarkbtnHelp" : "Lesezeichen aktualisieren","btnShoppingCart" : "Warenkorb","Help_ShoppingCartbtn" : "Warenkorb","Help_btnNextPage" : "Nächste Seite","Help_btnPrePage" : "Vorige Seite","Help_btnAutoFlip" : "Autoflip","Help_StopAutoFlip" : "Autoflip stoppen","btnaddbookmark" : "einfügen","btndeletebookmark" : "löschen","btnupdatebookmark" : "aktualisieren","frmyourbookmarks" : "Ihr Lesezeichen","frmitems" : "Artikel","DownloadFullPublication" : "Vollständige Publikation","DownloadCurrentPage" : "Aktuelle Seite","DownloadAttachedFiles" : "Anhänge","lblLink" : "Teilen-Link","btnCopy" : "kopieren","restorePage" : "Wiederherstellen?","tmpl_Backgoundsoundon" : "Hintergrundsound anschalten","tmpl_Backgoundsoundoff" : "Hintergrundsound abschalten","tmpl_Flipsoundon" : "Flipsound anschalten","tmpl_Flipsoundoff" : "Flipsound abschalten","Help_PageIndex" : "Aktuelle Seitenzahl","tmpl_PrintPageRanges" : "Seitenbereich","tmpl_PrintPreview" : "Vorschau","btnSelection" : "Text auswählen","loginNameLabel" : "Name:","btnGotoPage" : "Springen zu","btnSettings" : "Titeleinstellung","soundSettingTitle" : "Soundeinstellung","closeFlipSound" : "Flipsound anschalten","closeBackgroundSound" : "Hintergrundsound anschalten","frmShareLinkLabel" : "Link:","frmShareBtnCopy" : "kopieren","frmShareItemsGroupCaption" : "Mit Freunden teilen","frmPanelTitle" : "Share it","frmShareQRcode" : "QRCode","TAnnoActionPropertyStuff_GotoPage" : "Seite aufrufen","btnPageBack" : "Rückwärts","btnPageForward" : "Vorwärts","SelectTextCopy" : "Kopieren von Text","selectCopyButton" : "kopieren","TStuffCart_TypeCart" : "Warenkorb","TStuffCart_DetailedQuantity" : "Quantität","TStuffCart_DetailedPrice" : "Preis","ShappingCart_Close" : "Schließen","ShappingCart_CheckOut" : "Zahlung","ShappingCart_Item" : "Artikel","ShappingCart_Total" : "Summe","ShappingCart_AddCart" : "In Warenkorb einfügen","ShappingCart_InStock" : "Vorrätig","TStuffCart_DetailedCost" : "Versandkosten","TStuffCart_DetailedTime" : "Lieferzeit","TStuffCart_DetailedDay" : "Tag(e)","ShappingCart_NotStock" : "Nicht vorrätig","btnCrop" : "zuschneiden","btnDragButton" : "ziehen","btnFlipBook" : "Flipbook","btnSlideMode" : "Slidemodus","btnSinglePageMode" : "Einzelseite","btnVertical" : "Vertikal-Modus","btnHotizontal" : "Horizontal-Modus","btnClose" : "Ausschalten","btnBookStatus" : "Dokumentansicht","checkBoxInsert" : "In aktuelle Seite einbetten","btnQRCode" : "Scannen von QR-Codes","btnRotateLeft" : "Nach links drehen","btnRotateRight" : "Nach rechts drehen","lblSelectMode" : "Select view mode please.","frmDownloadPreview" : "Vorschau","frmDownload" : "Download","TTActionQuiz_PlayAgain" : "Wollen Sie es nochmal abspielen?","TTActionQuiz_Ration" : "Ihr Seitenverhältnis beträgt ","frmTelephone" : "Telephone list","btnDialing" : "Dialing","lblSelectMessage" : "Please copy the the text content in the text box","btnSelectText" : "Text auswählen","btnPhoneNumber" : "Telephone","btnWeCharShare" : "WeChat Share","btnMagnifierIn" : "Magnifying Glass","btnMagnifierOut" : "Magnifier Reduction","frmShareSmallProgram" : "smallProgram","btnMagnifier" : "Magnifier","frmPrintPrintLimitFailed" : "Sorry, you can't print the pages.","btnReport" : "Report","btnDoubleSinglePage" : "Page switch","btnDownloadPosterPrompt" : "Click to download the poster","infLongPressToSavePoster" : "Press and hold the mobile terminal to save the poster","infLongPressToIndentify" : "Long press to identify QR code","infScanCodeToView" : "Scan code to read","infDeleteNote" : "Do you want to delete the note?","proFullScreenWarn" : "Current browser does not support full-screen,Please use Chrome for best results","btnBack" : "Backs","frmVideoListTitle" : "Video list","frmVideoTitle" : "Video","lblConfirm" : "Confirm"}];var pageEditor =[[],[],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.618055",y:"0.694262",width:"0.169650",height:"0.008128"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.wwf.de/themen-projekte/"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.445919",y:"0.773561",width:"0.106629",height:"0.012808"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.wwf.de/"}}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.680880",y:"0.137733",width:"0.041711",height:"0.012869"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://Prof.in"}}],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.680903",y:"0.781990",width:"0.212241",height:"0.017025"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.melanieloureiro.com"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.062500",y:"0.702177",width:"0.225534",height:"0.012869"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.melanieloureiro.com"}}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.242623",y:"0.302363",width:"0.154904",height:"0.012869"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.kunst-im-tunnel.de"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.239495",y:"0.443474",width:"0.199352",height:"0.012869"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.kunsthalle-duesseldorf.de"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.541303",y:"0.819536",width:"0.124245",height:"0.010837"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.kunst-im-tunnel.de"}}],[],[]]
var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}
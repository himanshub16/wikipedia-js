try { document.getElementById('mw-page-base').remove(); } catch(err) {}
try { document.getElementById('mw-head-base').remove(); } catch(err) {}
try { document.getElementById('mw-indicators').remove(); } catch(err) {}
try { document.getElementById('mw-siteNotice').remove(); } catch(err) {}
try { document.getElementById('mw-head').remove(); } catch(err) {}
try { document.getElementById('mw-siteSub').remove(); } catch(err) {}
try { document.getElementById('mw-contentSub').remove(); } catch(err) {}
try { document.getElementById('mw-jump-to-nav').remove(); } catch(err) {}
try { document.getElementById('mw-left-navigation').remove(); } catch(err) {}
try { document.getElementById('p-namespaces').remove(); } catch(err) {}
try { document.getElementsByClassName('vectorTabs')[0].remove(); } catch(err) {}
try { document.getElementById('mw-page-base').remove(); } catch(err) {}

// modifying mw-panel
try { 
	//document.getElementById('mw-panel').innerHTML = "<div id='p-logo' role='banner'><a class='mw-wiki-logo' href='/wiki/Main_Page' title='Visit the main page'></a></div>";	
	//$('#mw-panel').append(document.getElementById('toc'));
	document.getElementById('mw-panel').innerHTML = document.getElementById('toc').innerHTML;
	document.getElementById('toctitle').remove();
	document.getElementById('mw-panel').style.position = 'fixed';
	document.getElementById('mw-panel').style.overflow = 'scroll';
	// document.getElementById('p-logo').remove();
	document.getElementById('mw-panel').style.height = '100%';
	document.getElementById('mw-panel').style.top = '0';
	document.getElementById('mw-panel').style.width = '18em';
	document.getElementsByClassName('mw-body')[0].style.marginLeft = '18em';
	document.getElementsById('mw-panel').style.fontSize = 'smaller';
} catch (err) { console.log ('There are some errors!'); }


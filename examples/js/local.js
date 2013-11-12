var config = {};
config.objects = [];
var app1 = 
{
	image:'img/examples/colors.png',
	title:'Custom Colorbars',
	description:'A dashboard arrangement of a dataset, each of which display a custom color scheme.',
	keywords:['three.js','JavaScript','plot','xyz'],
	url:'examples/colors.html'
};
var app2 = {
	image:'img/examples/pointcloud.png',
	title:'XYZ PointCloud Demo',
	description:'A Visualization of a 66MB pointcloud (taken from a rover) comprising 690,000 vertices. In tests, we have pushed the limit up to 84M vertices.',
	keywords:['three.js','JavaScript','xyz'],
	url:'http://app.jpl.nasa.gov/pointcloud/'
};
var app3 = {
	image:'img/examples/l2-swath2.png',
	title:'l2 swath visualization',
	description:'a level 2 dataset plotted in xyz. Step Indexer is used to skip every N measurements.',
	keywords:['three.js','JavaScript','xyz'],
	url:'examples/lowres-step-indexer.html'
}
var app4 = {
	image:'img/examples/l2-swath.png',
	title:'l2 swath visualization',
	description:'a level 2 dataset plotted in xyz. Step Indexer is used to skip every N measurements.',
	keywords:['three.js','JavaScript','xyz'],
	url:'examples/ghrsst-l2p-sst.html'
};
var app5 = {
	image: 'img/examples/oculusrift.png',
	title:'Oculus Rift Visualization',
	description:'Visualizing SST with Oculus Rift.',
	keywords:['three.js','JavaScript','rift.js','Oculus Rift'],
	url:'examples/rift.html'
};
var app6 = {
	image:'img/examples/colorurl.png',
	title:'Custom Colorbar via a web-based service',
	description:'We used standard scientific colorbars provided by a web service to color this Sea Surface Temperature widget.',
	keywords:['three.js','JavaScript','xyz','color','colorbar','color theory'],
	url:'examples/colorbar_url.html'
};
var app7 = {
	image: 'img/examples/grace.png',
	title:'GRACE Land Mass Liquid Water Data',
	description:'The Gravity Recovery and Climate Experiment (GRACE) twin satellites are making detailed measurements of Earth&#039;s gravity field and improving investigations about Earth&#039;s water reservoirs, over land, ice and oceans. <br />Webified GRACE Land Mass Liquid_Water_Equivalent_Thickness from PO.DAAC Labs Webification Service (http://podaac-w10n.jpl.nasa.gov)',
	keywords:['three.js','JavaScript','xyz','color','colorbar','color theory'],
	url:'examples/grace.html'
}
var app8 = {
	image: 'img/examples/grace2.png',
	title:'GRACE Liquid_Water_Water_Thickness',
	description:'The Gravity Recovery and Climate Experiment (GRACE) twin satellites are making detailed measurements of Earth&#039;s gravity field and improving investigations about Earth&#039;s water reservoirs, over land, ice and oceans. <br />Webified GRACE Liquid_Water_Water_Thickness from PO.DAAC Labs Webification Service (http://podaac-w10n.jpl.nasa.gov)',
	keywords:['three.js','JavaScript','xyz','color','colorbar','color theory'],
	url:'examples/grace.html'
}
config.objects.push(app1);
config.objects.push(app2);
config.objects.push(app3);
config.objects.push(app4);
config.objects.push(app5);
config.objects.push(app6);
config.objects.push(app7);
config.objects.push(app8);
$(document).ready(function(){
	$('#wrapper').html('');
	$.each(config.objects,function(i,x){
		$('#wrapper').append('<div class="appWrap"><div class="cardFront" style="background:url('+x.image+')"><span class="title">'+x.title+'</span></div><div class="cardBack">'+x.description+'<br /><a href="'+x.url+'" target="_blank">Link to Demo</a></div></div>');
	})
});
$(document).on('click','.appWrap',function(e){
	$(this).toggleClass('flipped')
})
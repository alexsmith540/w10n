## NASA/JPL's Webification
All of NASA/JPL's science data is available to the public.  Webification (w10n) is an open source NASA/JPL data access framework that enables developers to easily access data in web-friendly formats for visualizations like this:


<img src="https://raw.github.com/witoff/w10n/master/media/viz.png" width="400px;" alt="Challenge Text" style="width: 100px;height:50px;"/>

Webification simplifies use of the large and often complex data files published by NASA's Distributed Active Archive Centers, like [PO.DAAC](http://podaac.jpl.nasa.gov/).  The PO.DAAC w10n Service is open source software, that bridges the gap between Earth science data formats like NetCDF, HDF4 & HDF5 to JSON and XML.

### Re:Invent Challenge
From [here](http://reinvent.awsevents.com/hackathon.html):

<img src="https://raw.github.com/witoff/w10n/master/media/challenge.png" width="400px;" alt="Challenge Text" style="width: 100px;height:50px;"/>

### Getting Started
1, Explore the interactive tutorial [here](http://witoff.github.io/w10n/slides/index.html)

2, Test our our live API here:

```bash
# bash
curl http://54.212.253.164/data/GRACE.CSR.LAND.RL05.DS.G200KM.nc/lat/?output=json
```

```python
# python
import requests
requests.get('http://54.212.253.164/data/GRACE.CSR.LAND.RL05.DS.G200KM.nc/lat/?output=json')
```

```javascript
// Javascript
http.get("http://54.212.253.164/data/GRACE.CSR.LAND.RL05.DS.G200KM.nc/lat/?output=json", function(res) {
  res.on("data", function(chunk) {
    console.log("data: " + chunk);
  });
});
```

3, Spin up your own AMI (ID: ami-fc0f97cc in US-West-2 ) with w10n pre-configured.
Notes:
* Suggested instance type: m1.medium
* Security Group should allow inboud traffic from only ports 22 & 80


4, SSH into your instance
```bash
#log into the machine you just spun up
> ssh -i <your ssh key.pem> ubuntu@<address of the machine you just created>

# Configure this new w10n server to use port 80
ubuntu$ sudo ./taiga/taiga-1.6.6-linux-x86_64-b/bin/taiga-service config -p 80 -d /vol/data

# Start your server
ubuntu$ sudo ./taiga/taiga-1.6.6-linux-x86_64-b/bin/taiga-service start

# Verify that your server is running & logout
ubuntu$ curl localhost
ubuntu$ exit

## Now point your browser to the <address of the machine you just created> and interact with your favorite API!
```

5, Hack something masterful!  And/or get in touch with us (Alex Smith or Rob Witoff):
* Realtime Collaborative Q&A with the developers [here](https://w10nreinvent.hackpad.com/)
* Realtime video chat with the developers [here](https://bluejeans.com/530669767/browser)


### AWS Resources
n.b. All resources are located in the Oregon us-west-2 AWS Region
* **AMI**: Pre-built machine images
  * ami-fc0f97cc: Pre-packaged volume snapshots and configured machine.
* **EBS**: Ready-to-go filesystems
  * snap-42c7797d: All the below earth science data
* **S3**: Data [Bucket](https://s3-us-west-2.amazonaws.com/w10n)
 * Grace Land [data](https://s3-us-west-2.amazonaws.com/w10n/grace-land.nc) [29.9 MB]
 * Grace Ocean [data](https://s3-us-west-2.amazonaws.com/w10n/grace-ocean.nc) [30.4 MB]
 * Modis [data](https://s3-us-west-2.amazonaws.com/w10n/modis.nc) [568.5 MB]
 * Oscar [data](https://s3-us-west-2.amazonaws.com/w10n/oscar.nc) [55.5 MB]
 * **Terabytes of additional oceanography data is below**
 

  
### Background Mission Data:
* **Grace**: NASA's Gravity Recovery & Climate Satellite [here](http://grace.jpl.nasa.gov/). Grace launched in March of 2002 to investigate water and land data through detailedgravitational field measurements.
 * Information on Grace's Webified datasets are here: [water](http://podaac.jpl.nasa.gov/dataset/TELLUS_OCEANEOF_NC_RL05) and [land](http://podaac.jpl.nasa.gov/dataset/TELLUS_LAND_NC_RL05)
* **Modis**: NASA's Moderate-Resolution Imaging Spectroradiometer [here](http://modis.gsfc.nasa.gov/) was launched in '99 with instruments to measure the Earh's sea-surface tempuratue.
 * Information on Modis's Webified datasets is [here](http://podaac.jpl.nasa.gov/dataset/JPL-L2P-MODIS_A?ids=&values=&search=ghrsst)
* **Oscar**: Wind current speed & velocity
 * Information on Oscar's Webified datasets is [here](http://podaac.jpl.nasa.gov/dataset/OSCAR_L4_OC_third-deg)

**Resources:**
* [w10n Homepage](http://scifari.org/taiga/)
* [w10n Tutorial](http://witoff.github.io/w10n/slides/index.html)
* [w10n Visualization Toolkit](http://witoff.github.io/w10n/slides/html5.html)
* [re:Invent Hacathon Homepage](http://reinvent.awsevents.com/hackathon.html)

**More Data:**
* *Expert Data Bucket [here](https://s3-us-west-2.amazonaws.com/w10n-full)* [~100 GB]
* [NASA NEX Data Bucket](http://nasanex.s3.amazonaws.com/)
* [AMSRE Data](http://podaac-w10n.jpl.nasa.gov/w10n/allData/amsre/L3/sst_1deg_1mo/tos_AMSRE_L3_v7_200206-201012.nc/)
* [Tellus Ocean Data](http://podaac-w10n.jpl.nasa.gov/w10n/allData/tellus/L3/ocean_mass/RL05/netcdf/GRC_JPL_RL05_DPC_OCN_500_200301_201307.nc/)
* [Tellus Land Data](http://podaac-w10n.jpl.nasa.gov/w10n/allData/tellus/L3/land_mass/RL05/netcdf/GRACE.CSR.LAND.RL05.DS.G200KM.nc/)
* [Odyssea Data](http://podaac-w10n.jpl.nasa.gov/w10n/allData/ghrsst/data/L4/NWE/EUR/ODYSSEA/2010/002/20100103-EUR-L4UHRfnd-NWE-v01-fv01-ODYSSEA.nc.bz2/)


**Developers**
* Zhangfan Xing
* Alex Smith
* Jeremy Arca
* And many more...

[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/6a4e35bc50b42af056a2d9e8cd6a764b "githalytics.com")](http://githalytics.com/witoff/w10n)



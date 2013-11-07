## NASA's Webification
All of NASA's science data is available to the public.  Webification (w10n) is an open source NASA data access framework that enables developers to easily access data in web-friendly formats for visualiztions like this:

<img src="https://github.jpl.nasa.gov/witoff/w10n/raw/master/media/viz.png" width="400px;" alt="Challenge Text" style="width: 100px;height:50px;"/>

Webificaion simplifies use of the large and often complex data files published by NASA's Distributed Active Archive Centers, like [PO.DAAC](http://podaac.jpl.nasa.gov/).  The PO.DAAC w10n Service is open source software, that bridges the gap between Earth science data formats like NetCDF, HDF4 & HDF5 to JSON and XML.

### Re:Invent Challenge
From [here](http://reinvent.awsevents.com/hackathon.html):

<img src="https://github.jpl.nasa.gov/witoff/w10n/raw/master/media/challenge.png" width="400px;" alt="Challenge Text" style="width: 100px;height:50px;"/>

### Getting Started
1, Explore the interactive tutorial [here](http://podaac-w10n.jpl.nasa.gov/tutorial/#examples-1)

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
  console.log("w10n response: " + res.statusCode);
})
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

5, Hack something masterful!  And/or get in touch with us (Alex Smith or Rob Witoff).


### AWS Resources
n.b. All resources are located in the Oregon us-west-2 AWS Region
* **AMI**: Pre-built machine images
  * ami-fc0f97cc: Pre-packaged volume snapshots and configured machine.
* **EBS**: Ready-to-go filesystems
  * snap-42c7797d: All the below earth science data
* **S3**: Data [Bucket](https://s3-us-west-2.amazonaws.com/w10n)
 * Grace Land [data](https://s3-us-west-2.amazonaws.com/w10n/grace-land.nc)
 * Grace Ocean [data](https://s3-us-west-2.amazonaws.com/w10n/grace-ocean.nc)
 * Modis [data](https://s3-us-west-2.amazonaws.com/w10n/modis.nc)
 * Oscar [data](https://s3-us-west-2.amazonaws.com/w10n/oscar.nc)
 * *Expert Data Bucket [here](https://s3-us-west-2.amazonaws.com/w10n-full)*

  
### Background Mission Data:
* **Grace**: NASA's Gravity Recovery & Climate Satellite [here](http://grace.jpl.nasa.gov/). Grace launched in March of 2002 to investigate water and land data through detailedgravitational field measurements.
 * Information on Grace's Webified datasets are here: [water](http://podaac.jpl.nasa.gov/dataset/TELLUS_OCEANEOF_NC_RL05) and [land](http://podaac.jpl.nasa.gov/dataset/TELLUS_LAND_NC_RL05)
* **Modis**: NASA's Moderate-Resolution Imaging Spectroradiometer [here](http://modis.gsfc.nasa.gov/) was launched in '99 with instruments to measure the Earh's sea-surface tempuratue.
 * Information on Modis's Webified datasets is [here](http://podaac.jpl.nasa.gov/dataset/JPL-L2P-MODIS_A?ids=&values=&search=ghrsst)
* **Oscar**: Wind current speed & velocity
 * Information on Oscar's Webified datasets is [here](http://podaac.jpl.nasa.gov/dataset/OSCAR_L4_OC_third-deg)

**Resources:**
* [w10n homepage](http://scifari.org/taiga/)
* [w10n tutorial](http://podaac-w10n.jpl.nasa.gov/tutorial/)
* [re:Invent homepage](http://reinvent.awsevents.com/hackathon.html)

**Developers**
* Zhangfan Xing
* Alex Smith
* Jeremy Arca
* And many more...

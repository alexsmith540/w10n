## NASA's Webification
All of NASA's science data is available to the public.  Webification (w10n) is a NASA data access framework that enables developers to easily access data in web-friendly formats.

Webificaion simplifies use of the large and often complex data files published by NASA's Distributed Active Archive Centers, like [PO.DAAC](http://podaac.jpl.nasa.gov/).  The PO.DAAC w10n Service is open source software, that bridges the gap between Earth science data formats like NetCDF, HDF4 & HDF5 to JSON and XML.

### Re:Invent Challenge
From [here](http://reinvent.awsevents.com/hackathon.html):

<img src="https://github.jpl.nasa.gov/witoff/w10n/raw/master/media/challenge.png" width="400px;" alt="Challenge Text" style="width: 100px;height:50px;"/>

### Getting Started

### AWS Resources
n.b. All resources are located in the Oregon us-west-2 AWS Region
* AMI: Pre-built machine images
  * 
* EBS: Ready-to-go filesystems
  * Earth Science Data
* S3: Raw Data Files
  * Raw Data Files
  * MODIS Data [here]()
  * Landsat Data [here]()

(links)
Oscar: http://podaac.jpl.nasa.gov/dataset/OSCAR_L4_OC_third-deg
GHRSST: http://podaac.jpl.nasa.gov/dataset/JPL-L2P-MODIS_A?ids=&values=&search=ghrsst
Grace (water): http://podaac.jpl.nasa.gov/dataset/TELLUS_OCEANEOF_NC_RL05
Grace (land): http://podaac.jpl.nasa.gov/dataset/TELLUS_LAND_NC_RL05
  
Mission Data:
* Grace: Water Thickness
* Ghrsst: High Resolution Ocean Data
* Oscar: Wind current speed & velocity

s3/w10n:
  /modis.nc
  /landsat.nc
  /mer.nc
  /msl.nc

s3/w10n-full:
  / modis/arst/arst/arst/arst/.nc

### Documentation
* http://reinvent.awsevents.com/hackathon.html
* [Tutorial](http://podaac-w10n.jpl.nasa.gov/tutorial/)

Resources:
* http://scifari.org/taiga/
* [Tutorial](http://podaac-w10n.jpl.nasa.gov/tutorial/)
* 

Sponsors:
* NASA AMMOS
* NASA MMIPL

Developers
* Zhong Fang
* Alex Smith
* Jeremy Arca
* And many more...

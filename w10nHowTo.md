## How do I use w10n?????

w10n is all about deriving data positionally from numeric arrays. I cannot just specify a file, a geographic area, and measurement types and expect to get back processed data. The deriving / correlating are all up to you.

``` http://scifari.org/test/data/nc/coads_climatology.nc/?output=html ```

will take you to an HTML page which you can quickly browse a given data file and all associated metadata.

##Within our data file, we see 3 "Dimensions" (nested dimensional numeric arrays) that would aide us in visualizing some data.

###COADSX (180 values of longitude) [0:180]

###COADSY (90 values of latitude) [0:90]

###SST (sea suface temperature values) [0:1,0:90,0:180]

##Did you notice this?
``` [0:12,0:90,0:180] ```

The brackets are what we use to subset within our array.

The SST array contains (by default) 12 arrays. Each of those 12 arrays will contain 90 "rows" of data. Each of those 90 "rows" contain 180 values. And those values positionally relate to their X and Y axis values which are held in the COADSX and COADSY dimensions.

By looping through all 3 arrays, we positionally derive a latitude, longitude, and measurement that we can store or visualize.

URLS: 

``` http://scifari.org/test/data/nc/coads_climatology.nc/COADSX[0:180]?output=json ``` Our X axis values

``` http://scifari.org/test/data/nc/coads_climatology.nc/COADSY[0:90]?output=json ``` Our y axis values

``` http://scifari.org/test/data/nc/coads_climatology.nc/SST[0:1,0:90,0:180]?output=json ``` Our measurement values (subsetted down to the first time bound, which in this case is a month)

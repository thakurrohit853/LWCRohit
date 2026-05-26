import { LightningElement } from 'lwc';
import SRKImage from '@salesforce/resourceUrl/SRKImage';
import AllImage from '@salesforce/resourceUrl/AllImage';
export default class AccessStaticResource extends LightningElement {
     sImage = SRKImage;
    aImage = AllImage+'/AllImage/download.jfif';
    //download.jfif is a ZIp file of image which is uploaded in static resource and we can access that image by using the name of zip file and name of image in that zip file. 
}
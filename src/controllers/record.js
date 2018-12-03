import incident from '../../incident.json';
import users from '../../user.json';

const createRecord = (req, res) => {

  const redflag = incident.records.redflags;
  const newId = redflag.length + 1;
  const day = new Date();
  const createdBy = req.body.createdBy;
  const location = req.body.location;
  const comment = req.body.comment;


  const rcd = {
    id: newId,
    createdOn: day,
    createdBy: req.body.createdBy,
    type: req.body.type,
    location: req.body.location,
    status: req.body.status,
    Images: [],
    Videos: [],
    comment: req.body.comment
  }

  redflag.push(rcd);
  return res.status(200).send({
    status: 200,
    data: [{
      id: newId,
      message: "Created red-flag record"
    }]
  });
};

const fetchAllRecords = (req, res) => {
	const redflag = incident.records.redflags;
	if (incident.records.redflags) {
		res.status(200).json({
        data : [{
        	redflag
        }]
   });
  }
}

// Exporting controller
module.exports = {
	createRecord,
	fetchAllRecords
}
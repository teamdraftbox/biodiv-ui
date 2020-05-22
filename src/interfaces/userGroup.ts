export interface CustomFieldCreateData {
  name?: string;
  dataType?: string;
  fieldType?: string;
  iconURL?: string;
  notes?: string;
  units?: string;
  userGroupId?: number; // int64
  defaultValue?: string;
  displayOrder?: number; // int32
  isMandatory?: boolean;
  allowedParticipation?: boolean;
  values?: CustomFieldValuesCreateData[];
}
export interface CustomFieldData {
  cfId?: number; // int64
  cfName?: string;
  dataType?: string;
  fieldType?: string;
  cfIconUrl?: string;
  cfNotes?: string;
  defaultValue?: string;
  units?: string;
  displayOrder?: number; // int32
  allowedParticipation?: boolean;
  customFieldValues?: CustomFieldValuesData;
}
export interface CustomFieldDetails {
  customFields?: CustomFields;
  cfValues?: CustomFieldValues[];
  defaultValue?: string;
  displayOrder?: number; // int32
  isMandatory?: boolean;
  allowedParticipation?: boolean;
}
export interface CustomFieldFactsInsert {
  userGroupId?: number; // int64
  customFieldId?: number; // int64
  observationId?: number; // int64
  singleCategorical?: number; // int64
  multipleCategorical?: number /* int64 */[];
  minValue?: string;
  maxValue?: string;
  textBoxValue?: string;
}
export interface CustomFieldFactsInsertData {
  factsCreateData?: CustomFieldFactsInsert;
  mailData?: MailData;
}
export interface CustomFieldObservationData {
  userGroupId?: number; // int64
  customField?: CustomFieldData[];
}
export interface CustomFieldPermission {
  userGroupId?: number; // int64
  allowedCfId?: number /* int64 */[];
}
export interface CustomFieldUGData {
  userGroupId?: number; // int64
  customFieldId?: number; // int64
  defaultValue?: string;
  displayOrder?: number; // int32
  isMandatory?: boolean;
  allowedParticipation?: boolean;
}
export interface CustomFieldValues {
  id?: number; // int64
  customFieldId?: number; // int64
  values?: string;
  iconURL?: string;
  notes?: string;
}
export interface CustomFieldValuesCreateData {
  value?: string;
  iconURL?: string;
  notes?: string;
}
export interface CustomFieldValuesData {
  fieldTextData?: string;
  singleCategoricalData?: CustomFieldValues;
  multipleCategoricalData?: CustomFieldValues[];
  minRange?: string;
  maxRange?: string;
}
export interface CustomFields {
  id?: number; // int64
  authorId?: number; // int64
  name?: string;
  dataType?: string;
  fieldType?: string;
  units?: string;
  iconURL?: string;
  notes?: string;
}
export interface Featured {
  id?: number; // int64
  version?: number; // int64
  authorId?: number; // int64
  createdOn?: string; // date-time
  notes?: string;
  objectId?: number; // int64
  objectType?: string;
  userGroup?: number; // int64
  languageId?: number; // int64
  expireTime?: string; // date-time
}
export interface FeaturedCreate {
  notes?: string;
  objectId?: number; // int64
  objectType?: string;
  userGroup?: number /* int64 */[];
}
export interface FeaturedCreateData {
  featuredCreate?: FeaturedCreate;
  mailData?: MailData;
}
export interface MailData {
  observationData?: ObservationMailData;
  userGroupData?: UserGroupMailData[];
}
export interface Newsletter {
  id?: number; // int64
  version?: number; // int64
  date?: string; // date-time
  title?: string;
  userGroupId?: number; // int64
  displayOrder?: number; // int32
  languageId?: number; // int64
  parentId?: number; // int64
  showInFooter?: boolean;
  sticky?: boolean;
}
export interface ObservationLatLon {
  observationId?: number; // int64
  latitude?: number; // double
  longitude?: number; // double
  mailData?: MailData;
}
export interface ObservationMailData {
  observationId?: number; // int64
  location?: string;
  observedOn?: string; // date-time
  iconURl?: string;
  scientificName?: string;
  commonName?: string;
  authorId?: number; // int64
}
export interface UserGroup {
  id?: number; // int64
  allowUserToJoin?: boolean;
  description?: string;
  domianName?: string;
  foundedOn?: string; // date-time
  homePage?: string;
  icon?: string;
  isDeleted?: boolean;
  name?: string;
  neLatitude?: number; // double
  neLongitude?: number; // double
  swLatitude?: number; // double
  swLongitude?: number; // double
  theme?: string;
  visitCount?: number; // int64
  webAddress?: string;
  languageId?: number; // int64
  sendDigestMail?: boolean;
  startDate?: string; // date-time
  filterRule?: string;
  newFilterRule?: string;
}
export interface UserGroupIbp {
  id?: number; // int64
  name?: string;
  icon?: string;
  webAddress?: string;
}
export interface UserGroupMailData {
  id?: number; // int64
  name?: string;
  icon?: string;
  webAddress?: string;
}
export interface UserGroupMappingCreateData {
  mailData?: MailData;
  userGroups?: number /* int64 */[];
}
export interface UserGroupSpeciesGroup {
  userGroupId?: number; // int64
  speciesGroupId?: number; // int64
}
export interface UserGroupWKT {
  wkt?: string;
}

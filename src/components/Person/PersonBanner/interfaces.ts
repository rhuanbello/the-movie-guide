import { personBannerTypes } from "../../../services/store/modules/PersonDetails/interfaces";

export interface PersonBannerProps {
  personBanner: personBannerTypes;
  detailsLoading: boolean;
}
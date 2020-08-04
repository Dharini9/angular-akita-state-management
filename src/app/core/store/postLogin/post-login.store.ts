import { Store, StoreConfig } from '@datorama/akita';

export interface PostLoginState {
    ID: number;
    UserName: string;
    DisplayName: string;
    FirstName: string;
    LastName: string;
    LanguageID: number;
    DisplayDatesInUKFormat: boolean;
    CurrentLoginApplicationUserGroupID: number;
    LocalDateTime: string;
    RecruiterID: number;
    CompanyName: string;
    ImageDocumentID: number;
    ApplicationUserGroupID: number;
    CountryCode: number;
    UserEmail: string;
    ProfilePicture: ProfilePictureState;
}

export interface ProfilePictureState {
    ProfilePictureID: number;
    ModuleID: number;
    ID: number;
    ProfilePictureSize: number;
    ProfilePictureName: string;
    ProfilePictureDataStr: string;
}

export function createInitialState(): PostLoginState {
    return {
        ID: 0,
        UserName: '',
        DisplayName: '',
        FirstName: '',
        LastName: '',
        LanguageID: 0,
        DisplayDatesInUKFormat: false,
        CurrentLoginApplicationUserGroupID: 0,
        LocalDateTime: '',
        RecruiterID: 0,
        CompanyName: '',
        ImageDocumentID: 0,
        ApplicationUserGroupID: 0,
        CountryCode: 0,
        UserEmail: '',
        ProfilePicture: {
            ProfilePictureID: 0,
            ModuleID: 0,
            ID: 0,
            ProfilePictureSize: 0,
            ProfilePictureName: '',
            ProfilePictureDataStr: ''
        }
    };
}

@StoreConfig({ name: 'login' })
export class PostLoginStore extends Store<PostLoginState> {
    constructor() {
        super(createInitialState());
    }
}

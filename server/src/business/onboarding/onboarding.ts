export interface IOnboarding {
  signin(): void;
  signout(): void;
}

class Onboarding implements IOnboarding {
  public signin(): void {
    console.log('signin');
  }

  public signout(): void {
    console.log('signout');
  }
}

export default function setupOnboarding(): IOnboarding {
  return new Onboarding();
}

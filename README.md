# Hyperfiles Viewer

A gateway to publish and explore Hyperfiles.

This React app renders components from Near socialDB using the Near Social VM. All components are stored on-chain.

Explore the Hyperfiles docs at [http://docs.hyperfiles.org](http://docs.hyperfiles.org).

## Setup & Development

Initialize repo:

```
yarn
```

Start development version:

```
yarn start
```

## Widget example

Profile view

```jsx
let accountId = props.accountId || "eugenethedream";
let profile = socialGetr(`${accountId}/profile`);

<div>
  <img src={profile.image.url} />
  <span>{profile.name}</span> <span>(@{accountId})</span>
</div>;
```

Profile editor

```jsx
let accountId = context.accountId;

if (!accountId) {
  return "Please sign in with NEAR wallet";
}

const profile = socialGetr(`${accountId}/profile`);

if (profile === null) {
  return "Loading";
}

initState({
  name: profile.name,
  url: profile.image.url,
});

const data = {
  profile: {
    name: state.name,
    image: {
      url: state.url,
    },
  },
};

return (
  <div>
    <div>account = {accountId}</div>
    <div>
      Name:
      <input type="text" value={state.name} />
    </div>
    <div>
      Image URL:
      <input type="text" value={state.url} />
    </div>
    <div>Preview</div>
    <div>
      <img src={state.url} alt="profile image" /> {state.name}
    </div>
    <div>
      <CommitButton data={data}>Save profile</CommitButton>
    </div>
  </div>
);
```

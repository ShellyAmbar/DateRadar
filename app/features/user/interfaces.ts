enum GenderType {
  FEMALE,
  MALE,
  TRANS,
}

enum RelationshipType {
  MONOGAMY,
  NON_MONOGAMY,
  OPEN,
  POLYAMORY,
  EXPLORE,
}
enum RelationshipGoalsType {
  FRIENDSHIP,
  MARRIEGE,
  DATING,
  FUN,
  RELATIONSHIP,
}

type User = {
  firstName: string;
  lastName: string;
  age: number;
  gender: GenderType;
  relationshipType: RelationshipType;
  relationshipGoalType: RelationshipGoalsType;
  location: Location;
  preferences: {
    minAge: number;
    maxAge: number;
    gender: GenderType;
    relationshipType: RelationshipType;
    relationshipGoalType: RelationshipGoalsType;
  };
};

export {GenderType, RelationshipGoalsType, RelationshipType, User};

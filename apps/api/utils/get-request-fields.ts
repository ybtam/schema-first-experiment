// Helper function to parse requested fields into a format suitable for dynamic query building
import {type GraphQLResolveInfo, Kind} from "graphql";
import {string} from "zod";

export function getRequestedFields(info: GraphQLResolveInfo, options = { path: [] }) {
  type Field = Record<string, boolean>;
  type Fields = Record<string, Field> | Field;

  const fields: Fields = {};

  const selection = info.fieldNodes[0].selectionSet

  if (!selection) {
    throw new Error("No selection set found");
  }

  selection.selections.forEach((selection) => {
    switch (selection.kind) {
      case Kind.FIELD:
        fields[selection.name.value] = true;
        break;
      case Kind.INLINE_FRAGMENT:
        console.log(selection)
        //todo once i have nested fields I can test this out
        // fields[selection.typeCondition!.name.value] = getRequestedFields(
        //   { ...info, fieldNodes: [selection] },
        //   { path: [...options.path, selection.typeCondition!.name.value] }
        // );
        break;
      case Kind.FRAGMENT_SPREAD:
        break;
    }
  })

  return fields;
}

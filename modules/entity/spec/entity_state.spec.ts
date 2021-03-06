import { createEntityAdapter, EntityAdapter } from '../src';
import { BookModel } from './fixtures/book';
import { SelectedId } from '../src/models';

describe('Entity State', () => {
  let adapter: EntityAdapter<BookModel>;

  beforeEach(() => {
    adapter = createEntityAdapter({
      selectId: (book: BookModel) => book.id,
    });
  });

  it('should let you get the initial state', () => {
    const initialState = adapter.getInitialState();

    expect(initialState).toEqual({
      ids: [],
      entities: {},
      selectedIds: new Set<SelectedId>(),
    });
  });

  it('should let you provide additional initial state properties', () => {
    const additionalProperties = { isHydrated: true };

    const initialState = adapter.getInitialState(additionalProperties);

    expect(initialState).toEqual({
      ...additionalProperties,
      ids: [],
      entities: {},
      selectedIds: new Set<SelectedId>(),
    });
  });
});
